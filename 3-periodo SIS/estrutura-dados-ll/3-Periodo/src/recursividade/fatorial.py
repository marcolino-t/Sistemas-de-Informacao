def fatorial(n):
     #caso base
     if n ==0:
          return 1
     else:
          return n*fatorial(n-1)
     
r = fatorial(80)
print(r)