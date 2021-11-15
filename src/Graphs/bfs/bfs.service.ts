import { Injectable } from '@nestjs/common';

@Injectable()
export class BfsService {

    private graph;


    constructor(){
        this.graph = [];
    }

    fill(matrixLength){

        for(let i = 0; i < matrixLength; i++){
            this.graph[i] = [];
            for(let j = 0; j < matrixLength; j++){
                this.graph[i][j] = 0;
            }
        }
    }
    
    bfs(start){

        // Visitng the vertex.
        // Exploration of the vertex.
        let queue = [];
        let distance = 1;
        queue.push(start);
        let visited = new Array(this.graph.length).fill(0);
        let distances = [];
        visited[start] = 1;
        distances[start] = 0;
        let node;
        let identified_vertex;
        while(queue.length > 0){
            //Pickup an vertex to explore
            node = queue.shift();
            console.log('current_node: ', node, "\t Visited:", visited);
            //visit the adjacent vertex.
            identified_vertex = 0;
            for(let i = 0; i < this.graph.length; i++){
                if(this.graph[node][i] == 1 && !visited[i]){
                    queue.push(i);
                    visited[i] = 1;
                    distances[i] = distance;
                    console.log('Pushed to Queue: ', i);
                    identified_vertex = 1;
                }
            }
            if(identified_vertex)
                distance++;
        }
        
        console.log('visited: ', visited);
        console.log('distances: ', distances);
    }

    createVertex(start, end){

        this.graph[start][end] = 1;
    }

    main(){

        this.fill(6);
        this.createVertex(0, 1);
        this.createVertex(0, 2);
        this.createVertex(1, 3);
        this.createVertex(1, 4);
        this.createVertex(2, 4); 
        this.createVertex(3, 4);
        this.createVertex(3, 5);
        this.createVertex(4, 5);
        
        

        console.log("Graph:", this.graph);
        
    }
}
