list2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]; #index is beginning from 0

print list2[1]
print list2[1:5] #[20, 30, 40, 50 
				 #slices use indexes. 
				 #note: the element (60) at the last index (5) will not be included

print "\n"		 
print list2[1:5:1]  #[20, 30, 40, 50] 
print list2[1:5:2]  #[20, 40]		
print list2[1:5:3]  #[20, 50]		
print list2[1:5:4]  #[20]

print "\nslicing with 0, -1 etc. "
#print list2[1:5:0]  #error
print list2[1:5:-1]  #[]
print list2[1:5:-2]  #[]