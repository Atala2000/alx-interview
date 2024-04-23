def rotate_2d_matrix(matrix):
    """Rotates a 2D matrix in place by 90 degrees clockwise."""
    if not isinstance(matrix, list) or not matrix:
        return  # Return early if matrix is not a non-empty list

    rows, cols = len(matrix), len(matrix[0])

    if not all(isinstance(row, list) and len(row) == cols for row in matrix):
        return  # Return early if matrix contains invalid data

    rotated_matrix = []
    for col in range(cols):
        rotated_row = []
        for row in range(rows - 1, -1, -1):
            rotated_row.append(matrix[row][col])
        rotated_matrix.append(rotated_row)

    # Update original matrix with rotated values
    for i in range(rows):
        for j in range(cols):
            matrix[i][j] = rotated_matrix[i][j]
