
def bubble_sort(arglist): 
    nums = list(arglist)
    for i in xrange(len(arglist)):
        for j in xrange(i+1, len(arglist)):
            if arglist[j] < arglist[i]:
                arglist[j], arglist[i] = arglist[i], arglist[j]
    return arglist
  
##Programming Task#1
#Union of 2 arrays without using pythons in built sorting functions
print "programming task1: getting a union of 2 arrays"
list1 = [1, 3, 5, 7, 9, 111,]
list2 = [1, 3, 5, 222]
output = bubble_sort(list(set(list1).union(list2)))
print output
print "\n\n"

##Programming Task#2
#Combining of 2 arrays without using pythons in built sorting functions
print "\n"
print "programming task2: Combining 2 arrays"
a = [ 1, 3, 5, 7 , 2, 222]
b = [ 2, 4, 6, 8 ]

data = []
for x in a:
	data.append(x)
for y in b:
	data.append(y)
	
#[entry for tag in tags for entry in entries if tag in entry]	
#[entry for x in a for y in b ]
#map data.append(x)

map(func, seq)
map( 

print bubble_sort(data)	
print "\n"


