#include "cirListDeque.h"
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
 
    /* Test your linked list in here! */
	/* Try to write the tests yourself */
    printf("createCirListDeque()...\n");
    struct cirListDeque* q = createCirListDeque();
    addBackCirListDeque(q, (TYPE)4);
    addBackCirListDeque(q, (TYPE)5);
    addBackCirListDeque(q, (TYPE)6);
    addFrontCirListDeque(q, (TYPE)3);
    addFrontCirListDeque(q, (TYPE)2);
    addFrontCirListDeque(q, (TYPE)1);
    printf("printCirListDeque(q)...\n");
    printCirListDeque(q);
    printf("frontCirListDeque(q)...\n");
    printf("%g\n", frontCirListDeque(q));
    printf("backCirListDeque(q)...\n");
    printf("%g\n", backCirListDeque(q));
    printf("removeFrontCirListDeque(q)...\n");
    removeFrontCirListDeque(q);
    printf("removeBackCirListDeque(q)...\n");
    removeBackCirListDeque(q);
    printf("printCirListDeque(q)...\n");
    printCirListDeque(q);
    printf("printCirListDeque(q)...\n");
    printCirListDeque(q);
	return 0;
}


