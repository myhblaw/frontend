import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Inventory } from "../../models/inventory.model";
import { InventoryRepository } from "../../models/inventory.repository";
import { QuestionRepository } from "../../models/question.repository";
import { Question } from "../../models/question.model";


@Component({
    selector: "add-edit",
    templateUrl: "question.component.html"
})

export class QuestionComponent {
    
    title:string = 'Question an Item';
    editing: boolean = false;
    comment: Question = new Question();
    item: Inventory = new Inventory();
    activeRoute: ActivatedRoute;

    constructor(private repository: QuestionRepository,
                private repository2: InventoryRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        // Edit

            this.item = this.repository2.getItem(activeRoute.snapshot.params["id"]);
        

        // Question

            this.comment = new Question();
              
    }
    
    get inventoryList(): Inventory[] {
        return this.repository2.getInventory();        
    }
    
    question(form: NgForm) {
        this.repository.saveQuestion(this.comment);
        this.router.navigateByUrl("inventory/list");                
    }


    
}