CFLAGS=-std=c99 -g -Wall
CC=gcc

all: build

init:
	mkdir -p build

main.o: main.c
	$(CC) $(CFLAGS) -c main.c -o build/main.o

build: init main.o
	$(CC) $(CFLAGS) build/main.o -o build/main

execute: build
	build/main

clean:
	rm -rf build/
