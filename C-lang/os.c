#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <sys/shm.h>
#include <sys/stat.h>

int main(){
  // size of shred memory object 
  const int SIZE = 4096;
  // name of the shared memory object
  const char *name = "OS";
  // strings written to shared memory
  const char *message_0 = "Hello";
  const char *message_1 = "World!";
  // shared memory file descriptor
  int shm_fd;
  // pointer to shared memory object
  // void *ptr;
  // create the shared memory object
  shm_fd = shm_open(name, O_CREAT | O_RDWR, 0666);
  // configure the size of the shared memory object
  ftruncate(shm_fd, SIZE);
  // memory map the shared memory object
  // for producer 
  ptr = mmap(0, SIZE, PROT_WRITE, MAP_SHARED, shm_fd, 0);

  // for consumer 
  ptr = mmap(0, SIZE, PROT_READ, MAP_SHARED, shm_fd, 0);
  // write messages to shared memory

  //read from the shared memory object
  printf("%s", (char *)ptr);
  // sprintf(ptr, "%s", message_0);
  ptr += strlen(message_0);
  sprintf(ptr, "%s", message_1);
  // ptr += strlen(message_1);

  // remove the shared memory object
  return 0;
}