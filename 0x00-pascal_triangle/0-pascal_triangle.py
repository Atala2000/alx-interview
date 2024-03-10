#!/usr/bin/python3


def pascal_triangle(n):
    """Pascal triangle function"""
    if n <= 0:
        return []
    else:
        pascal = [[1]]
        for i in range(1, n):
            row = [1]
            for j in range(1, i):
                row.append(pascal[i - 1][j - 1] + pascal[i - 1][j])
            row.append(1)
            pascal.append(row)
        return pascal
