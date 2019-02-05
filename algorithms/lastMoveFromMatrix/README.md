
# Obtener el último movimiento de la matriz.

## Problema:

  ```
  Starting at the top left corner of an N x M grid and facing towards the right, 
  you keep walking one square at a time in the direction you are facing. 
  If you reach the boundary of the grid or if the next square you are about to visit has already been visited, you turn right. 
  
  You stop when all the squares in the grid have been visited. 
  What direction will you be facing when you stop? 
  For example: Consider the case with N = 3, M = 3. The path followed will be 
  (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,1) -> (2,0) -> (1,0) -> (1,1). 
  At this point, all squares have been visited, and you are facing right.
  
  Input specification 
  The first line contains T the number of test cases. 
  Each of the next T lines contain two integers N and M, denoting the number of rows and columns respectively.
  
  Output specification 
  Output T lines, one for each test case, containing the required direction you will be facing at the end. 
  Output L for left, R for right, U for up, and D for down. 
  1 <= T <= 5000, 1 <= N,M <= 10^9.
  
  Entry
  
  1 1
  2 2
  3 1
  3 3
  
  Output
  
  R
  L
  D
  R
```

## Solución lógica

La idea principal es definir los limites del arreglo dinamicamente para recorrer unicamente las esquinas principales válidas de la espiral hasta llegar al último movimiento hecho.

### Observaciónes
* Los movimientos siempre serán en este order `R -> D -> L -> U -> R -> D -> L -> ...`
* Se necesitan un indice por cada movimiento (Top, Left, Right, Down) y estos nos ayudaran a definir los limites permitidos a recorrer.
* Dependiendo del movimiento realizado se va `quemando` toda la fila o columna anterior indicando
  que esta no se debe recorrer nuevamente.

Para que se entienda mejor observa las iteraciones de la siguiente imagen. 

![See image](https://drive.google.com/uc?export=view&id=17PMRgpSW6Ax2sqhNsakIwjYCMigVoi-L)

## Código
Puedes ver el codigo comentado para entender aún mejor el proceso.
[See the code](index.js)

## Resultados de las pruebas

![See image](https://drive.google.com/uc?export=view&id=1E-rOA2I33bLTTXWCiaADVNCTHgN3saS3)