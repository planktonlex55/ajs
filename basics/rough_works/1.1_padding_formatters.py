#   https://pyformat.info/#conversion_flags
# 	The old style defaults to right aligned while for new style it's left.

var1 = 'test'
print 'old style: ' #note \n is auto with print.
print '%10s' % (var1) #old style

print 'new style with indent: '
print '{:>10}'.format (var1)

############
print '\n'
print 'aligning left'
print 'old style: '
print '%-10s' %var1
print 'new style: '
print '{:10}'.format(var1)

#%d  for numerical
#%s  for string
	#%10s for spacing old style. Add an additional % 
	#{:>10} along with .format

print '\n\n'
print 'left padding with space'  #padding means the length of padding char + the string should be relevant to the number u put eg. 10
print '{:>10}'.format(var1)
print 'right padding with space'
print '{:<10}'.format(var1)	
print 'left padding with _char'
print '{:_>10}'.format(var1) #padding before with a char _
print 'right padding with _char'
print '{:_<10}'.format(var1) #padding after with a char _
print 'align center'
print '{:^10}'.format(var1)  #align center
print 'align center with _ padding left n right'
print '{:_^10}'.format (var1)







