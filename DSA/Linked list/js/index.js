class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class singlylinklist{
    constructor()
    {
        this.head = null;
    }

    lastinsert(data){
        let newNode = new Node(data);

        if(this.head == null){
            this.head = newNode;
            return;
        }else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    reverselinklist()
    {
        let current = this.head;
        let prev = null;
        let next = null;

        while (current != null) 
        {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    display() {
        if(this.head == null) {
            console.log("List is empty");
        }else{
            let result = [];
            let current = this.head;
            while(current.next != null){
                result.push(current.data);
                current = current.next;
            }
            result.push(current.data);
            console.log(result.join(" -> "));
            
        }
    }
}

let test = new singlylinklist();

test.lastinsert(10);
test.lastinsert(20);
test.lastinsert(30);
test.lastinsert(40);

test.display();
test.reverselinklist();
test.display(); 