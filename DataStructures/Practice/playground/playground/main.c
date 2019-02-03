//
//  main.c
//  playground
//
//  Created by AASHWIN VATS on 28/01/19.
//  Copyright © 2019 AASHWIN VATS. All rights reserved.
//

#include <stdio.h>

void foo (int* num){
    *num = 60;
}



int main(int argc, const char * argv[]) {
    // insert code here...
    int a=10;
    printf("Value of a= %d\n Address of a= %d\n ", a, &a);
    foo(&a);
    printf("Value of a= %d\n Address of a= %d\n ", a, &a);
    
}
