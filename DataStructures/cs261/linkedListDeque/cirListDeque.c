//Submitted by: Aashwin Vats
//vatsa@oregonstate.edu
//933-615-112

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <float.h>
#include "cirListDeque.h"

/* Double Link Struture */
struct DLink {
	TYPE value;/* value of the link */
	struct DLink * next;/* pointer to the next link */
	struct DLink * prev;/* pointer to the previous link */
};

# define TYPE_SENTINEL_VALUE DBL_MAX 


/* ************************************************************************
 Deque ADT based on Circularly-Doubly-Linked List WITH Sentinel
 ************************************************************************ */

struct cirListDeque {
	int size;/* number of links in the deque */
	struct DLink *Sentinel;	/* pointer to the sentinel */
};

/* internal functions prototypes */
struct DLink* _createLink (TYPE val);
void _addLinkAfter(struct cirListDeque *q, struct DLink *lnk, TYPE v);
void _removeLink(struct cirListDeque *q, struct DLink *lnk);

/* ************************************************************************
	Deque Functions
************************************************************************ */


/*
 create a new circular list deque
	pre:    none
 	post:	returns pointer to allocated deque q, q->Sentinel is allocated and q->size equals zero
 */

struct cirListDeque *createCirListDeque()
{
    
	/* FIXME: you must write this */
    struct cirListDeque *clDeque = malloc(sizeof(struct cirListDeque));
    assert(clDeque!=0);
    
    //Initialize the deque, set size to 0
    clDeque->size = 0;
    clDeque->Sentinel = (struct DLink *) malloc(sizeof(struct DLink));
    assert(clDeque->Sentinel != 0);
    
    clDeque->Sentinel->next = clDeque->Sentinel;
    clDeque->Sentinel->prev = clDeque->Sentinel;
    
    return clDeque;
    
}


/* Create a link for a value.

	param: 	val		the value to create a link for
	pre:	none
	post:	a link to store the value
*/
struct DLink * _createLink (TYPE val)
{
	/* FIXME: you must write this */
    struct DLink *newLink = (struct DLink *)malloc(sizeof(struct DLink));
    assert(newLink != 0);
    
    newLink-> value = val;
    
	/*temporary return value..you may need to change it*/
	return(newLink);

}

/* Adds a link after another link

	param: 	q		pointer to the deque
	param: 	lnk		pointer to the existing link in the deque
	param: 	v		value of the new link to be added after the existing link
	pre:	q is not null
	pre: 	lnk is not null
	pre:	lnk is in the deque 
	post:	the new link is added into the deque after the existing link
*/
void _addLinkAfter(struct cirListDeque *q, struct DLink *lnk, TYPE v)
{
	/* FIXME: you must write this */
    assert(q!=0);
    assert(lnk!=0);
    //Is lnk in the deque?
    assert(lnk->next != 0);
    assert(lnk->prev != 0);
    //add new link
    struct DLink* newLink = _createLink(v);
    //add new link with value v after lnk
    lnk->next->prev = newLink;
    newLink->next = lnk->next;
    lnk->next = newLink;
    newLink->prev = lnk;
    //Increment q->size
    q->size++;

}

/* Adds a link to the back of the deque

	param: 	q		pointer to the deque
	param: 	val		value for the link to be added
	pre:	q is not null
	post:	a link storing val is added to the back of the deque
*/
void addBackCirListDeque (struct cirListDeque *q, TYPE val) 
{
	/* FIXME: you must write this */
    assert(q!=0);
    _addLinkAfter(q, q->Sentinel->prev, val);
   
}

/* Adds a link to the front of the deque

	param: 	q		pointer to the deque
	param: 	val		value for the link to be added
	pre:	q is not null
	post:	a link storing val is added to the front of the deque
*/
void addFrontCirListDeque(struct cirListDeque *q, TYPE val)
{
	/* FIXME: you must write this */
    assert(q != 0);
    _addLinkAfter(q, q->Sentinel, val);

}

/* Get the value of the front of the deque

	param: 	q		pointer to the deque
	pre:	q is not null and q is not empty
	post:	none
	ret: 	value of the front of the deque
*/
TYPE frontCirListDeque(struct cirListDeque *q) 
{
	/* FIXME: you must write this */	 
	/*temporary return value..you may need to change it*/
    assert(q != 0);
    assert(q->size != 0);
    /*temporary return value...you may need to change this */
    return(q->Sentinel->next->value);
	
}

/* Get the value of the back of the deque

	param: 	q		pointer to the deque
	pre:	q is not null and q is not empty
	post:	none
	ret: 	value of the back of the deque
*/
TYPE backCirListDeque(struct cirListDeque *q)
{
	/* FIXME: you must write this */	 
	/*temporary return value..you may need to change it*/
    assert(q != 0);
    assert(q->size != 0);
    return(q->Sentinel->prev->value);
}

/* Remove a link from the deque

	param: 	q		pointer to the deque
	param: 	lnk		pointer to the link to be removed
	pre:	q is not null and q is not empty
	post:	the link is removed from the deque
*/
void _removeLink(struct cirListDeque *q, struct DLink *lnk)
{
	/* FIXME: you must write this */	 
    assert(q!=0);
    assert(q->size != 0);
    assert(lnk!=0);
    
    
    //remove lnk from deque
    lnk->prev->next = lnk->next;
    lnk->next->prev = lnk->prev;
    
    //Reduce q->size
    q->size--;
    
    //free lnk from memory?? ERROR
    free(lnk);
    
}

/* Remove the front of the deque
	param: 	q		pointer to the deque
	pre:	q is not null and q is not empty
	post:	the front is removed from the deque
*/
void removeFrontCirListDeque (struct cirListDeque *q) {
	/* FIXME: you must write this */
    assert(q != 0);
    assert(q->size != 0);
    _removeLink(q, q->Sentinel->next);

}


/* Remove the back of the deque

	param: 	q		pointer to the deque
	pre:	q is not null and q is not empty
	post:	the back is removed from the deque
*/
void removeBackCirListDeque(struct cirListDeque *q)
{
  	/* FIXME: you must write this */
    assert(q != 0);
    assert(q->size != 0);
    _removeLink(q, q->Sentinel->prev);
}

/* De-allocate all links of the deque, and the deque itself

	param: 	q		pointer to the deque
	pre:	none
	post:	All links (including Sentinel) are de-allocated
*/
void freeCirListDeque(struct cirListDeque *q)
{
	/* FIXME: you must write this */
    
    //Free all front link till size = 0
    while(q->size != 0){
        printf("Deleting links with values %g | \n", frontCirListDeque(q));
        removeFrontCirListDeque(q);
    }
    //Free Sentinel
    free(q->Sentinel);
    //Set Sentinel = 0
    q->Sentinel = 0;
}

/* Check whether the deque is empty

	param: 	q		pointer to the deque
	pre:	q is not null
	ret: 	1 if the deque is empty. Otherwise, 0.
*/
int isEmptyCirListDeque(struct cirListDeque *q) {
  	/* FIXME: you must write this */
	/*temporary return value..you may need to change it*/
    assert(q != 0);
    if(q->size > 0){
        return(1);
    }
    return(0);
}

/* Print the links in the deque from front to back

	param: 	q		pointer to the deque
	pre:	q is not null and q is not empty
	post: 	the links in the deque are printed from front to back
*/
void printCirListDeque(struct cirListDeque *q)
{
	/* FIXME: you must write this */
    //printf("Size of deque is: %d\n", q->size);
    assert(q != 0);
    assert(q->size != 0);
    struct DLink* newLink = q->Sentinel->next;
    while(newLink != q->Sentinel){
        printf("%g\n", newLink->value);
        newLink = newLink->next;
    }

}
