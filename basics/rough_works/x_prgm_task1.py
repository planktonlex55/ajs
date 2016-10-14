##Programming Task#1
#Union of 2 arrays
print "\n"
print "programming task1: getting a union of 2 arrays"
list1 = [1, 3, 5, 7, 9]
list2 = [1, 3, 5]
output = sorted(set(list1).union(list2))
print output
print "\n\n"

##Programming Task#2
#Combining of 2 arrays
print "\n"
print "programming task2: Combining 2 arrays"
print "solution 1: "
#solution 1
a = [ 1, 3, 5, 7 ]
b = [ 2, 4, 6, 8 ]

data = []
for x in a:
	data.append(x)
for y in b:
	data.append(y)
print data	

print "\n"
print "solution 2: "
#solution 2 for combining 2 arrays
var1 = "".join(str(data) for data in a)
#print var1
var2 = "".join(str(data) for data in b)
#print var2
var3 = var1 + var2
print var3

print "\n\ncrapppp"

a1 = [ 1, 3, 5, 7 ]
b1 = [ 2, 4, 6, 8 ]

c1 = a1 + b1
print c1

"""
def bubblesort( A ):
  for i in range( len( A ) ):
    for k in range( len( A ) - 1, i, -1 ):
      if ( A[k] < A[k - 1] ):
        swap( A, k, k - 1 )
 
def swap( A, x, y ):
  tmp = A[x]
  A[x] = A[y]
  A[y] = tmp
  print tmp
"""
def bubble_sort(lst): 
    nums = list(lst)
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            if lst[j] < lst[i]:
                lst[j], lst[i] = lst[i], lst[j]
    return lst
  
print "\n====\n"  
print bubble_sort(c1)
