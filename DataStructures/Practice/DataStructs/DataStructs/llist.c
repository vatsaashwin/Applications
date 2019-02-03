//
//  llist.c
//  DataStructs
//
//  Created by AASHWIN VATS on 02/02/19.
//  Copyright © 2019 AASHWIN VATS. All rights reserved.
//

#include <stdio.h>


struct Node{
    int data;
    struct Node *next;
};

void printList(struct Node *n)
{
    while (n != NULL)
    {
        printf(" %d ", n->data);
        n = n->next;
        //printf("printing n after n=n->next %d\n", n->data);
    }
}


//creates a simple llist with 3 nodes
int main()
{
    struct Node* head = NULL;
    struct Node* second=NULL;
    struct Node* third=NULL;
    
    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node)); 
    
    head->data = 1;
    head->next = second;
    
    second->data = 2;
    second->next = third;
    
    third->data = 3;
    third->next= NULL;
    
    //printf("printing head %d \n", head->data);
    printList(head);

    
    return 0;
}


