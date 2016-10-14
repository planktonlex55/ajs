list1 = [10, 20, 30, 10] # comma is mandatory
print list1
print list1[0]
print list1[1]
print list1[2]

print "\n"
list2 = ['apples', 'oranges', 'lime']
print list2
print list2[0]
print list2[1]
print list2[2]

print "\n"
list3 = [] #empty list
list3.append(list1[0]) #append 1st element of list1
list3.append(list2[0]) #append 1st element of list2
print "appended list3 is: ", list3	

print "\n"
print "max value in list1 is ", max(list1)
print "min value in list1 is ", min(list1)
del list2[2]
print "list2 after deletion of lime: ", list2
print "length of list2 is: ", len(list2)
list2.reverse()
print "reversed list2 is:", list2

print "\n"
print "count() shows how many times an item occurs in the list"
print "lets see how many time 10 occurs in list1"
print list1.count(10)
print "lets see how many time 'apples' occurs in list2"
print list2.count('apples')

print "\n"

