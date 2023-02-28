import java.util.*;
class charSusbstring{ 
    public static void main(String[]args){
    Scanner scn = new Scanner(System.in);

   // Enter the Sentence and Character 
    System.out.println("Enter a Sentence (any English sentence)");
    String sentence = scn.nextLine();
    System.out.println("Enter a Letter (any letter from A to Z)");
    String letter = scn.nextLine();

    System.out.println("Entered Sentence is : " + sentence);
    System.out.println("Entered letter is : " + letter);

// If Input is missing
    if ( sentence.isEmpty() || letter.isEmpty()) {
           System.out.println("Input Missing");
    } 


else {
int index = sentence.indexOf(letter);
 
    if(index == -1){
        System.out.println("The letter does not exist in the sentence");
    }else{
        System.out.println(sentence.substring(index+1));
    }
    

}
    
    

}  
    
}

