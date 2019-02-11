#include "cirListDeque.h"
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
 
    /* Test your linked list in here! */
	/* Try to write the tests yourself */
    struct cirListDeque* q = createCirListDeque();
    addFrontCirListDeque(q, (TYPE)3);
    addFrontCirListDeque(q, (TYPE)2);
    addFrontCirListDeque(q, (TYPE)1);
    addBackCirListDeque(q, (TYPE)4);
    addBackCirListDeque(q, (TYPE)5);
    addBackCirListDeque(q, (TYPE)6);
    printf("\nPrint list created: ");
    printCirListDeque(q);
    printf("\nFront of deque: ");
    printf("%g ", frontCirListDeque(q));
    printf("\nBack of deque: ");
    printf("%g", backCirListDeque(q));
    printf("\nRemove from front... ");
    removeFrontCirListDeque(q);
    printf("\nRemove from back...");
    removeBackCirListDeque(q);
    printf("\nPrint final list: ");
    printCirListDeque(q);
    printf("\n");
	return 0;
}


