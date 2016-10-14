
#http://www.learnpython.org/en/String_Formatting

print 'hi in single quotes'
print "hi in double quotes"
print 'single quotes '' (not appearing) in single quotes'
print "single quotes '' (appearing) in double quotes"

var1 = 100
print 'var1 (print is in single quotes)' 
print "var1 (print is in double quotes)"
print var1; #plain printing
print "%d (formatter print is in double quotes)" % var1
print '%d (formatter print is in single quotes)' % var1

#python does not have block/multi line comments. some people say to use ''' or """ but the official documentation does not support it. 

var2 = 3.14;
print 'var2 (print is in single quotes)'
print "var2 (print is in double quotes)"
print var2


str1 = 'one'
str2 = 'two'

print 'old style:'
print '%s %s' % (str1, str2)  #old style. round braces () are mandatory. values in braces () are called tuples.
print 'new style:'
print '{} {}'.format (str1, str2) ; #new style. uses .format() 
print 'new style can be used for re-arranging:'
print '{1} {0}'.format (str1, str2) ; #output is: two one

