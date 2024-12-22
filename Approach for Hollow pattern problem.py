N = 7

for i in range(0, N):

    if i == 0: # part- 1 logic

        print('  '* (N-1) + '*')

    elif i == N - 1: # part- 3 logic

        print('* ' * N)

    else:  # part- 2 logic
        left_spaces = '  ' * (N -i-1)

        hollow_spaces = ('  ' * ( i - 1))

        print(left_spaces + '* ' + hollow_spaces + '*')