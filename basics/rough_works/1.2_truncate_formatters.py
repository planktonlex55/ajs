# https://pyformat.info/#string_pad_align

var1 = 'test'
print '{:_>10}'.format(var1) 
var2 = 'xylophone'
print '{:_>10}'.format(var2) #padding before with a char _

print '{:.5}'.format(var2) #note it is .5 and not 0.5 === .5 means trim to 5 chars