#include<stdio.h>
#include<time.h>

void win(){
	printf("\nAnd we Have a winner at %d\n",time(0));
}

int main(){
	char buff[20];
	printf("Welcome to Binary Exploitation 101\n");
	printf("You! tell me your name :");
	scanf("%50s",buff);
	printf("You are No special , good bye~");
	return 0;
}
