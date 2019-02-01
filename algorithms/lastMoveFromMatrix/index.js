/**
 * Starting at the top left corner of an N x M grid and facing towards the right, 
 * you keep walking one square at a time in the direction you are facing. 
 * If you reach the boundary of the grid or if the next square you are about to visit has already been visited, 
 * you turn right. 
 * 
 * You stop when all the squares in the grid have been visited. 
 * What direction will you be facing when you stop? 
 * For example: Consider the case with N = 3, M = 3. The path followed will be (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,1) -> (2,0) -> (1,0) -> (1,1). 
 * At this point, all squares have been visited, and you are facing right.
 * 
 * Input specification 
 * The first line contains T the number of test cases. 
 * Each of the next T lines contain two integers N and M, denoting the number of rows and columns respectively.
 * 
 * Output specification 
 * Output T lines, one for each test case, containing the required direction you will be facing at the end. 
 * Output L for left, R for right, U for up, and D for down. 
 * 1 <= T <= 5000, 1 <= N,M <= 10^9.
 * 
 * Entry
 * 
 * 1 1
 * 2 2
 * 3 1
 * 3 3
 * 
 * Output
 * 
 * R
 * L
 * D
 * R
 */

/**
 * @param n Number of rows. 
 * @param m Number of columns. 
 */
function getLastMoveFromMatrix(n, m) {

    /** 
     * Indices auxiliares para recorrer la matriz dinamicamente
     * sin importar el tamaño.
     * */ 
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;

    // Variable que nos indicará hacia donde se tiene que mover. R -> D -> L -> U
    let direction = 0;

    // Variable donde se guardara el último movimiento realizado.
    let lastMove = 'R';

    /**
    * Ciclo que nos permitiria jugar con los indices de la matriz
    * para recorrer las esquinas principales.
    * La indicación para saber cual es el último movimiento realizado
    * será expresada cuando top == bottom y left == right haciendo la intersección
    * del elemento en los cuatro puntos.
    * */
    while (top <= bottom && left <= right) {

        /**
         * Dependiendo del movimiento se van quemando las
         * filas y columnas donde ya se recorrieron las esquinas.
         * */
        switch (direction % 4) {
            case 0:
                lastMove = 'R'; // Movimiento a la derecha.
                top++; // Aumenta el indice de la fila de arriba hacia abajo.
                break;
            case 1:
                lastMove = 'D'; // Movimiento hacia abajo
                right--; // Disminuye el indice de la columna de derecha a izquierda.
                break;
            case 2:
                lastMove = 'L'; // Movimiento hacia la izquierda.
                bottom--; // Disminuye el indice de la fila de abajo hacia arriba.
                break;
            default:
                lastMove = 'U'; // Movimiento hacia arriba.
                left++; // Aumenta el indice de la columna de izquierda a derecha.
                break;
        }

        direction++; // Contador incremental.
    }

    return lastMove; // Devuelve el último movimiento.
}

module.exports = getLastMoveFromMatrix;
