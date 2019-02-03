//
//  dynArr.c
//  DataStructs
//
//  Created by AASHWIN VATS on 02/02/19.
//  Copyright © 2019 AASHWIN VATS. All rights reserved.
// Worksheet 14

#include "dynArr.h"

# ifndef TYPE
# define TYPE int
# endif

struct DynArr
{
    TYPE *data; /* pointer to the data array */
    int size; /* Number of elements in the array */
    int capacity; /* capacity ofthe array */
};

void dynArrayInit(struct DynArr *v, int capacity)
{
    v->data = (TYPE *)malloc(sizeof(TYPE)*capacity);
    assert(v->data!=0);
    v->size=0;
    v->capacity=capacity;
}

void dynArrayFree(struct DynArr *v)
{
    if(v-> data !=0)
    {
        free(v->data);
        v->data= 0 ;
    }
    v->size = 0;
    v->capacity=0;
}

void dynArraySize( struct DynArr *v)
{
    return v->size;
}

void dynArrayAdd(struct DynArr *v, TYPE val)
{
    /* Check to see if a resize is necessary */
    if(v->size >= v->capacity)
        _dynArraySetCapacity(v, 2 * v->capacity);
    v->data[v->size] = val;
    v->size++;

}

void _dynArraySetCapacity(struct DynArr *v, int newCap)
{
    struct DynArr *new=NULL;
    //
}
