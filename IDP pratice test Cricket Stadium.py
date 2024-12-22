def seats(row):
    matrix = []
    for i in range(row):
        numbers = list(map(int, input().split()))
        matrix.append(numbers)
    results = 0
    for j in matrix:
        for i in range(len(j) - n + 1):
            if sum(j[i : i + n]) == 0:
                results += 1
    return results
    
 #updated
n=int(input())  
rows,column=input().split()
row=int(rows)
column=int(column)
output=seats(row)
print(output)