#for can be used to iterate over many data structures in python.
#ex. 1

list1 = [10, 20, 30]

for x in list1:
	print x
	
string1 = "python"
for x in string1:
	print x
	
	
dict1 = {"key1": "value1", "key2": "value2", "key3": 10}	
print dict1 #order of printing seems to be from last to first

for x in dict1:
	print x #o/p is: key3 key2 and key1 
	print dict1[x] #o/p are the values 

#one more way to use for 	
#>>> for line in open("a.txt"):
#...     print line,
#...
#first line
#second line
	
print "this way we can use for"
print "Note: The built-in function iter takes an iterable object and returns an iterator."	

y = iter (list1)
print y #<listiterator object at 0x021375D0>

print y.next()
print y.next()
print y.next() 
#parantheses is a must.
print y.next() #Expected StopIteration error 

