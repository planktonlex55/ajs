myint = 10
myfloat = 3.14

print "Examples of float() and int():"
var1 = float(myint)
print var1 #10.0 
var1 = int(myfloat)
print var1 #3
print round(myfloat) #3.0

print "\naddition of 1 and 2"
varone = 1
vartwo = 2
varthree = varone + vartwo
print varthree

print "\nconcatenation eg."
strone = 'hello'
strtwo = 'world'
strthree = strone + strtwo
print "strthree is:", strthree 

print "\n"
print strone + strtwo #allowed  
print varone + vartwo #allowed between 2 ints.
print varone + vartwo + strone # not allowed between int and string

