// Variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const resolution = 10;
const cols = canvas.width / resolution;
const rows = canvas.height / resolution;
let cellColor = '#000000';
let backgroundColor = '#ffffff';

// Función para crear una cuadrícula vacía
function createEmptyGrid() {
    return new Array(cols).fill(null)
        .map(() => new Array(rows).fill(0));
}

// Función para inicializar el juego
function startGame() {
    // Crear una cuadrícula vacía
    let grid = createEmptyGrid();

    // Establecer el color de las células y fonde
    cellColor = document.getElementById('cellColor').value;
    backgroundColor = document.getElementById('backgroundColor').value;
    canvas.style.backgroundColor = backgroundColor;

    // Generar un patrón inicial aleatorio
    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            grid[x][y] = Math.random() < 0.5 ? 0 : 1;
        }
    }

    // Función para dibujar la cuadrícula en el canvas
    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
                if (grid[x][y] === 1) {
                    ctx.fillStyle = cellColor;
                    ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
                }
                ctx.strokeRect(x * resolution, y * resolution, resolution, resolution);
            }
        }
    }

    // Función para actualizar el estado de la cuadrícula
    function update() {
        let nextGrid = createEmptyGrid();

        for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
                const neighbors = countNeighbors(grid, x, y);
                const state = grid[x][y];

                if (state === 0 && neighbors === 3) {
                    nextGrid[x][y] = 1;
                } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                    nextGrid[x][y] = 0;
                } else {
                    nextGrid[x][y] = state;
                }
            }
        }

        grid = nextGrid;
    }

    // Función para contar el número de vecinos de una celda
    function countNeighbors(grid, x, y) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                const col = (x + i + cols) % cols;
                const row = (y + j + rows) % rows;
                sum += grid[col][row];
            }
        }
        sum -= grid[x][y];
        return sum;
    }

    // Bucle principal del juego
    function mainLoop() {
        drawGrid();
        update();
        requestAnimationFrame(mainLoop);
    }

    mainLoop();
}