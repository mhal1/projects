import './App.css';
import React from "react";

import javaL from './images/java-logo-vector.svg';

class CodeComp extends React.Component {

    constructor() {
        super();
        this.state = {
            hide1: true,
            hide2: true,
            hide3: true,
            hide4: true,
            hide5: true,
            hide6: true,
            hide0: false
        }
    }

    render() {
        return (
            <div>
                <h1 className="App p-5" hidden={this.state.hide0}>
                    <code style={{color:"blue"}}><img className="jLogoJ" src={javaL}/> </code>
                </h1>
                <div className="container-fluid">
                    <div className="col-6 offset-3 col-md-6 offset-md-3 mb-5" hidden={this.state.hide0}>
                        <ul className="list-group text-center" style={{cursor:"pointer"}}>
                            <li className="list-group-item" onClick={() => this.setState({
                                hide1: true,
                                hide2: true,
                                hide3: true,
                                hide4: true,
                                hide5: true,
                                hide6: false,
                                hide0: true
                            })}>Diamonds
                            </li>
                            <li className="list-group-item" onClick={() => this.setState({
                                hide1: true,
                                hide2: true,
                                hide3: true,
                                hide4: true,
                                hide5: false,
                                hide6: true,
                                hide0: true
                            })}>Words to Numbers
                            </li>
                            <li className="list-group-item" onClick={() => this.setState({
                                hide1: true,
                                hide2: true,
                                hide3: true,
                                hide4: false,
                                hide5: true,
                                hide6: true,
                                hide0: true
                            })}>Trailing Zeros
                            </li>
                            <li className="list-group-item" onClick={() => this.setState({
                                hide1: true,
                                hide2: true,
                                hide3: false,
                                hide4: true,
                                hide5: true,
                                hide6: true,
                                hide0: true
                            })}>int32 to IPv4
                            </li>
                            <li className="list-group-item" onClick={() => this.setState({
                                hide1: true,
                                hide2: false,
                                hide3: true,
                                hide4: true,
                                hide5: true,
                                hide6: true,
                                hide0: true
                            })}>Number generation with assigned probabilities
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="container-fluid pe-5 mt-5">
                            <div className="row row-cols-1">

                                <div className="col" hidden={this.state.hide6}>
                                    <div className="mb-5">
                                        <h3 className="card-title text-center">Diamond Generator</h3>

                                        <p className="text-center mb-5">Wednesday, 17th November 2021 </p>
                                        <p>
                                            This will return a Diamond with core size of n (n must be odd as no even diamonds). For
                                            example, if you want a diamond with core n = 7, output will be:
                                            <br/>
                                            <div
                                                className="col-3 offset-6 col-md-4 offset-md-6 col-lg-5 offset-lg-6">
                                            <code >
                                    <pre>
                                        {`
   *  
  ***
 *****
*******
 *****
  ***
   * 
                                      `}
                                    </pre>
                                            </code>
                                            </div>
                                            For this we build a string with core having n number of *'s, then we build a string for every
                                            two *'s that are in our core string. We add these additional strings in beginning of
                                            core string and then in reverse order after the core string.
                                            <br/>
                                            <br/>
                                            We have stored only 32 numbers in our HashMap yet we are able to translate
                                            from words to give us 1,000,000 different numbers!

                                        </p>
                                        <h6 className="mb-2"> Java Solution:</h6>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div
                                                    className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-5 offset-lg-4">
                                                    <code>
                                    <pre>
                                        {`
public static String print(int n) {
    if(n%2 == 0 || n < 0){
      return null;
    }
    String coreString = "";
    String reflectedString = "";
    for(int i = 0; i < n; i++){
      coreString += "*";
    }
    int spaces = 0;
    for(int j = n-2; j >= 1; j -= 2){
      spaces++;
      String newString = "";
      for(int y = 0; y < spaces; y++){
        newString += " ";
      }
      for(int x = 0; x < j; x++){
        newString += "*";
      }
      reflectedString += newString + "\\n";
      newString += "\\n" + coreString;
      coreString = newString;
    }
    String finalString = coreString + "\\n" + reflectedString;
    return finalString;
}
                                      `}
                                    </pre>
                                                    </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="mb-5" hidden={this.state.hide5}>
                                        <h3 className="card-title mb-2 text-center">Words to Numbers (up to 1
                                            million)</h3>
                                        <p className="text-center mb-5">Monday, 15th November 2021 </p>
                                        <p>
                                            This will return the numerical value from the number written using
                                            english,
                                            for example "twenty-four" will give 24.
                                            <br/>
                                            <br/>
                                            To begin we look at how we will generally translate from words to numbers.
                                            Our input will be a string with words separated by a white space and some
                                            with a dash ("-"),
                                            we will scan this string ans extract the information using a HashMap data
                                            structure.
                                            The HashMap allows us to store keys and corresponding values, so we can have
                                            the key as
                                            the word representation of the number and the value as the numerical value.
                                            <br/>
                                            <br/>
                                            We look to make this as small as possible to make it efficient as we will be
                                            searching through
                                            this HashMap. So we only store most important information from which we can
                                            extract everything
                                            else. The core numbers from 0 to 10, form basis of almost all numbers, 11 to
                                            20 will be needed
                                            too as they don't form basis and are unique e.g. eleven doesn't have the
                                            word "one", the 10s
                                            all the way up to 100 - twenty, thirty, forty, ..., ninety,
                                            and finally 100, 1000, 100000 and 1000000.
                                            <br/>
                                            <br/>
                                            If we look at a few cases of written numbers above the core ones (0-20) we
                                            start to see a pattern
                                            emerge:
                                            <br/>
                                            <br/>
                                            <p className="text-center"> twenty-one => twenty one: search for "twenty"
                                                and "one", then add to get 21 </p>

                                            So numbers up to 100 will be simple, it's just summing the numbers if more
                                            than 1 digit, if just 1 digit just
                                            take from HashMap. Another case:
                                            <br/>
                                            <br/>
                                            <p className="text-center"> one hundred and two => one hundred two: search
                                                for "one", "hundred" and "two" </p>
                                            <br/>
                                            Here we need to multiply the first "one" with the "hundred" after it, then
                                            add "two": (1 x 100) + 2 = 102.
                                            So we need to make sure we check whether there are any of the "hundred",
                                            "thousand", "hundred-thousand" or "million"
                                            words after our number word, and then multiply these with our number. This
                                            is important for larger numbers, for example:
                                            <br/>
                                            <br/>
                                            <p className="text-center"> seven hundred thousand: search for "seven",
                                                multiply by 100 and 1000 = 700,000 </p>
                                            Another case:
                                            <br/>
                                            <br/>
                                            <p className="text-center"> two hundred and ten thousand: search for "two",
                                                multiply by 100 <span style={{color: 'blue'}}>and 1000</span>, search
                                                for "ten"
                                                multiply by 1000, add these two: 200,000 + 10,000 = 210,000
                                            </p>
                                            <br/>
                                            Here we have to realise that our "two" needs to be multiplied by both 100
                                            and 1000, so we search for extra multiples of ten
                                            after our first and make sure to include these.
                                            <br/>
                                            <br/>
                                            We have stored only 32 numbers in our HashMap yet we are able to translate
                                            from words to give us 1,000,000 different numbers!

                                        </p>
                                        <h6 className="mb-2"> Java Solution:</h6>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div
                                                    className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-5 offset-lg-4">
                                                    <code>
                                    <pre>
                                        {`
public static int wordToNumber(String numStr) {
      System.out.println("Input number = " + numStr);
      HashMap<String, Integer> numbersMap = new HashMap<String, Integer>();
      numbersMap.put("zero",0);
      numbersMap.put("one",1);
      numbersMap.put("two",2);
      numbersMap.put("three",3);
      numbersMap.put("four",4);
      numbersMap.put("five",5);
      numbersMap.put("six",6);
      numbersMap.put("seven",7);
      numbersMap.put("eight",8);
      numbersMap.put("nine",9);
      numbersMap.put("ten",10);
     
      numbersMap.put("eleven",11);
      numbersMap.put("twelve",12);
      numbersMap.put("thirteen",13);
      numbersMap.put("fourteen",14);
      numbersMap.put("fifteen",15);
      numbersMap.put("sixteen",16);
      numbersMap.put("seventeen",17);
      numbersMap.put("eighteen",18);
      numbersMap.put("nineteen",19);
     
      numbersMap.put("twenty",20);
      numbersMap.put("thirty",30);
      numbersMap.put("forty",40);
      numbersMap.put("fifty",50);
      numbersMap.put("sixty",60);
      numbersMap.put("seventy",70);
      numbersMap.put("eighty",80);
      numbersMap.put("ninety",90);
     
      numbersMap.put("hundred",100);
      numbersMap.put("thousand",1000);
      numbersMap.put("hundred-thousand",100000);
      numbersMap.put("million",1000000);
     
      String[] words = numStr.split(" ");
      //numbers less 100
      if(words.length==1){
        String[] words2 = numStr.split("-");
        if(words2.length==1){
          return numbersMap.get(words[0]);
        }
        else{
          int number1 = numbersMap.get(words2[0]);
          int number2 = numbersMap.get(words2[1]);
          return number1 + number2;
        }
      }
      //for numbers larger than or == 100
      else{
        int finalN = 0;
        ArrayList<Integer> intNumbers = new ArrayList<>();
        for(String n:words){
          String[] str1 = n.split("-");
          if(!(n.equals("and"))){
              if(str1.length==1){
                intNumbers.add(numbersMap.get(n));
              }
              else if(str1[0].equals("hundred") && str1[1].equals("thousand")){
                intNumbers.add(numbersMap.get(n));
              }
              else{
                int number1 = numbersMap.get(str1[0]);
                int number2 = numbersMap.get(str1[1]);
                intNumbers.add(number1 + number2);
              }
            }
          }
        var currentN = 0;
        for(int i = 0; i<intNumbers.size()-1;i++){
          currentN = intNumbers.get(i);
          if(intNumbers.get(i+1)==100 ||
            intNumbers.get(i+1)==1000 ||
            intNumbers.get(i+1)==100000){
           
            if(i<intNumbers.size()-2){
              if(intNumbers.get(i+2)==1000){
                currentN *= intNumbers.get(i+1)*intNumbers.get(i+2);
              }        
              else if(i<intNumbers.size()-3){
                if(intNumbers.get(i+3)==1000){
                  currentN *= intNumbers.get(i+1)*intNumbers.get(i+3);
                }
                else if(intNumbers.get(i)==100 ||
                        intNumbers.get(i)==1000 ||
                        intNumbers.get(i)==100000){
                            currentN =0;
                }
                else{
                  currentN *= intNumbers.get(i+1);
                }
              }
              else if(intNumbers.get(i)==100 ||
                      intNumbers.get(i)==1000 ||
                      intNumbers.get(i)==100000){
                        currentN =0;
              }
              else{
                currentN *= intNumbers.get(i+1);
              }
            }
            else if(intNumbers.get(i)==100 ||
            intNumbers.get(i)==1000 ||
            intNumbers.get(i)==100000){
                currentN =0;
            }
            else {
                currentN *= intNumbers.get(i+1);
              }
          }
          else if(i>=intNumbers.size()-2){
            i=intNumbers.size()-1;
            currentN = intNumbers.get(i);
          }
          else if(intNumbers.get(i)==100 ||
            intNumbers.get(i)==1000 ||
            intNumbers.get(i)==100000){
            currentN =0;
          }
          else{
            currentN = intNumbers.get(i+1);
          }
          finalN += currentN;
          if(i==intNumbers.size()-1){
            System.out.println("Output number = "+finalN);
            return finalN;
          }
          if((intNumbers.get(intNumbers.size()-1)==100
             || intNumbers.get(intNumbers.size()-1)==1000
            || intNumbers.get(intNumbers.size()-1)==100000)
            &&
            i == intNumbers.size()-2
            ){
            //System.out.println("Output number = "+finalN);
            return finalN;
          }
        }
      }
      return -1;
    }
}
                                      `}
                                    </pre>
                                                    </code>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col">
                                    <div className="mb-5" hidden={this.state.hide4}>
                                        <h3 className="card-title mb-2 text-center">Trailing zeros in factorial
                                            number</h3>

                                        <p className="text-center mb-5">Wednesday, 10th November 2021 </p>
                                        <p>
                                            This will return the number of zeros at the end of the factorial of a
                                            number n <span
                                            style={{color: 'blue'}}> without actually calculating the factorial.</span>
                                            <br/>
                                            <br/>
                                            If we look at first few factorial numbers we start to see a pattern
                                            emerge:
                                            <br/>
                                            <p className="text-center">10! = <span
                                                style={{backgroundColor: 'lightblue'}}>10</span> x 9 x 8 x 7 x 6
                                                x <span
                                                    style={{backgroundColor: 'lightblue'}}>5</span> x 4 x 3 x <span
                                                    style={{backgroundColor: 'lightblue'}}>2</span> x 1 </p>
                                            <p className="text-center">10! = 9 x 8 x 7 x 6 x 4 x 3 x 1 x <span
                                                style={{backgroundColor: 'lightblue'}}>10</span> x <span
                                                style={{backgroundColor: 'lightblue'}}>10</span></p>
                                            This gives us two zeros at the end of 10! as any number n multiplied by
                                            10 will have
                                            a zero at the end, here we have two tens so two zeros. The rule is
                                            everytime we
                                            multiply by 10 we will have another zero at the end.
                                            <br/>
                                            <p className="text-center">20! = <span
                                                style={{backgroundColor: 'lightblue'}}>20</span> x 19 x 18 x 17 x 16
                                                x <span
                                                    style={{backgroundColor: 'lightblue'}}>15</span> x 14 x 13 x 12
                                                x 11 x 10! </p>
                                            <p className="text-center">20! = <span
                                                style={{backgroundColor: 'lightblue'}}>2</span> x <span
                                                style={{backgroundColor: 'lightblue'}}>10</span> x 19 x 18 x 17 x 16
                                                x 3 x <span
                                                    style={{backgroundColor: 'lightblue'}}>5</span> x 14 x 13 x 12 x
                                                11 x 10! </p>
                                            <p className="text-center">20! = 19 x 18 x 17 x 16 x 14 x 13 x 12 x 11 x
                                                3 x <span
                                                    style={{backgroundColor: 'lightblue'}}>10</span> x <span
                                                    style={{backgroundColor: 'lightblue'}}>10</span> x 10! </p>
                                            Now we have two more tens and also two from 10! which means we have 4
                                            zeros at the
                                            end of 20!. Another rule is that for every 5 we get in our multiples, we
                                            will always
                                            have a 2 which we can multiply it with to get a 10.
                                            <span style={{color: 'blue'}}> Therefore we see that for every 5 we have in our number we will add one zero to the end of its factorial. </span>
                                            <br/>
                                            <br/>
                                            Interestingly, once we reach 25! we will have an extra 5 multiple
                                            because 25 = 5 x
                                            5, and we will have another 2 which will give us another factor of 10.
                                            We will need to account for this in our approach.
                                            If we then continue and look at 125! this will give an additional
                                            multiple of 5
                                            because 125 = 5 x 5 x 5, so we need to include this too.
                                            <br/>
                                            <br/>
                                            So now another pattern emerges (keeping in mind every 5 multiple will
                                            multiply with
                                            a 2 to give us a factor of 10, and so another zero):
                                            <br/>
                                            <p className="text-center">Every 5 = 5 x 1 <span
                                                style={{color: 'blue'}}> (+1 zero)</span></p>
                                            <p className="text-center">Every 25 = 5 x 5 <span
                                                style={{color: 'blue'}}> (+2 zeros)</span>
                                            </p>
                                            <p className="text-center">Every 125 = 5 x 5 x 5 <span
                                                style={{color: 'blue'}}> (+3 zeros)</span>
                                            </p>
                                            <p className="text-center">Every 625 = 5 x 5 x 5 x 5 <span
                                                style={{color: 'blue'}}> (+4 zeros)</span>
                                            </p>
                                            <p className="text-center">...</p>
                                            We see that we will have extra zeros for every multiple of 5 which fits
                                            into our
                                            number.
                                            Therefore, loop through for each multiple of 5^n and calculate how many
                                            of those fit
                                            in our number, then this amount will be the
                                            number of zeros to add.


                                        </p>
                                        <h6 className="mb-2"> Java Solution:</h6>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div
                                                    className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-5 offset-lg-4">
                                                    <code>
                                    <pre>
                                        {`
public static int zeros(int n) {
        if (n == 0) {
            return 0;
        } else if (n <= 5) {
            return 1;
        } else {
            int trailingZeros = 0;
            for (int i = 5; i < n; i *= 5) {
                int remainder = n % i;
                int no5 = n - remainder;
                int thisManyFit = no5 / i;
                trailingZeros += thisManyFit;
            }
            return trailingZeros;
        }
    }
}
                                      `}
                                    </pre>
                                                    </code>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col" hidden={this.state.hide3}>
                                    <div className="mb-5">
                                        <h3 className="card-title mb-2 text-center">int32 to IPv4</h3>
                                        <p className="text-center mb-5">Tuesday, 9th November 2021 </p>
                                        <p>
                                            This will return the IPv4 representation from a 32 bit integer.
                                            <br/>
                                            <br/>
                                            An IP address is used as a unique identifier for a computer on a network
                                            so that it can communicate with other computers. IPv4 uses 4 bytes with a
                                            full stop
                                            after each to represent this unique identifier, like 128.128.128.0 or
                                            255.255.255.255,
                                            with each number having maximum value of 255 as they are stored using 8
                                            bits.
                                            <br/>
                                            <br/>
                                            We speak a bit about this bit representation of numerical numbers.
                                            The code used to convert between binary and numbers, where n is index of
                                            binary number starting from 0:
                                            <br/>
                                            <br/>
                                            <p>
                                                <table className="table table-bordered">
                                                    <caption>Table 1</caption>
                                                    <tbody>
                                                    <tr>
                                                        <td>n</td>
                                                        <td>7</td>
                                                        <td>6</td>
                                                        <td>5</td>
                                                        <td>4</td>
                                                        <td>3</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2^n</td>
                                                        <td>128</td>
                                                        <td>64</td>
                                                        <td>32</td>
                                                        <td>16</td>
                                                        <td>8</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                This table is used to go from binary (1's and 0's) to numerical numbers,
                                                if we have a 1 we add the
                                                corresponding 2^n number to our sum and if we have a 0 we skip it. For
                                                example,
                                                in binary, 101 (which in 8 bits is 00000101) is equal to 5:
                                                <br/>
                                                <br/>
                                                <table className="table table-bordered">
                                                    <caption>Table 2</caption>
                                                    <tbody>
                                                    <tr>
                                                        <td>n</td>
                                                        <td>7</td>
                                                        <td>6</td>
                                                        <td>5</td>
                                                        <td>4</td>
                                                        <td>3</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2^n</td>
                                                        <td>128</td>
                                                        <td>64</td>
                                                        <td>32</td>
                                                        <td>16</td>
                                                        <td>8</td>
                                                        <td className="table-warning">4</td>
                                                        <td>2</td>
                                                        <td className="table-warning">1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Binary</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td className="table-info">1</td>
                                                        <td>0</td>
                                                        <td className="table-info">1</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                Here only sum values in yellow which have a corresponding binary value
                                                of 1 in blue, so 4 + 1 = 5.

                                            </p>
                                            So a IPv4 will have 4 of these 8 bit binary numbers, for example 128.0.0.0
                                            is 10000000.00000000.00000000.00000000,
                                            if we remove the full stops we get 32 bit binary number, so now 128.0.0.0 is
                                            10000000000000000000000000000000. We use the 32-bit to numerical number to
                                            retrieve the numerical value of this, which
                                            is similar to before but we just keep increasing n until 32.
                                            Here, 10000000000000000000000000000000 would be 2^31 (31 here because we
                                            start from 0 not 1 for index value)
                                            which is equal to 2147483648.
                                            <br/>
                                            <br/>
                                            This program will return the IPv4 format from a 32 bit binary integer value.
                                            <br/>
                                            <br/>
                                            First step is to convert our number to 32 bit binary, then we split the 32
                                            bit
                                            binary number into 4 pieces of 8 bits, then we convert each of these 8 bit
                                            binary numbers to numerical values to get the IPv4 representation.
                                            <br/>
                                            <br/>
                                            So we first take 2^n (starting from n=31 to n=0) and check whether it fits
                                            in our number, if it fits we then place a 1
                                            in that index of our 32 bit binary number, if not we place a zero instead.
                                            If 2^n fits we subtract 2^n from our number and
                                            repeat until we have full binary representation. A short example:
                                            <br/>
                                            <br/>
                                            If we have the number 17, using table 1 above, we check:
                                            <br/>
                                            <br/>
                                            <p className="text-center">
                                                17 - 128 = - 111, this doesn't fit, place 0 in 8th index,
                                                <br/>
                                                17 - 64 = -47, this doesn't fit, place 0 in 7th index,
                                                <br/>
                                                17 - 32 = -15, this doesn't fit, place 0 in 6th index,
                                                <br/>
                                                16 - 16 = 1, this fits, place 1 in 5th index, next number is 1,
                                                <br/>
                                                1 - 8 = -7, this doesn't fit, place 0 in 4th index,
                                                <br/>
                                                1 - 4 = -3, this doesn't fit, place 0 in 3rd index,
                                                <br/>
                                                1 - 2 = -1, this doesn't fit, place 0 in 2nd index,
                                                <br/>
                                                1 - 1 = 0, this fits, place 1 in 1st index.
                                            </p>
                                            Therefore, we have 17 = 00010001 (index starts from 0 from right to left).
                                            We use this approach with our larger number
                                            and obtain the 32 bit binary number. Then split this 32 bit binary number
                                            into 4 from left to right, leaving us
                                            with 4 8 bit binary numbers. Then final step is using table 1 to convert
                                            these 8 bit binary numbers to their
                                            numerical representation.
                                        </p>
                                        <h6 className="mb-2"> Java Solution:</h6>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div
                                                    className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-5 offset-lg-4">
                                                    <code>
                                    <pre>
                                        {`
public static String longToIP(long ip) {
    String bitNo = "";
    for(int i = 31; i >= 0; i--){
      ip -= (long) Math.pow(2,i);
      if(ip >= 0){
        bitNo += 1;
      }
      else{
        bitNo += 0;
        ip += (long) Math.pow(2,i);
      }
    }
    String IPv4 = "";
    for(int i = 0; i < bitNo.length(); i+=8){
      String ip8 = bitNo.substring(i,i+8);
      Long numberNo = (long) 0;
      for(int j = 7; j >= 0; j--){
        if(ip8.substring(j,j+1).equals("1")){
          numberNo += (long) Math.pow(2,7-j);
        }
      }
      if(i == (bitNo.length()-8)){
        IPv4 += numberNo;
      }
      else{
        IPv4 += numberNo + ".";
      }
    }
    System.out.println(IPv4);
    return IPv4;
  }
}
                                      `}
                                    </pre>
                                                    </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col" hidden={this.state.hide2}>
                                    <div className="mb-5">
                                        <h3 className="card-title text-center">Number generation with assigned
                                            probabilities</h3>

                                        <p className="text-center mb-5">Monday, 8th November 2021 </p>
                                        <p>
                                            This will produce a number generator which will generate a number from given set of
                                            numbers with corresponding probability.
                                            <br/>
                                            <br/>
                                            We will produce a new list consisting of 100 numbers. As we want the selection of any
                                            of our numbers to be selected with a certain probability, we will insert each number
                                            with a frequency corresponding to the probability. To do this we multiply each probability
                                            by 100 and round this number, then we add this many times.
                                            <br/>
                                            <br/>
                                            For example, if we have list [1, 2, 3] and we want them to be selected with corresponding
                                            probabilities [0.1, 0.5, 0.4], then we would have 10 number 1's, 50 number 2's and 40
                                            number 3's.
                                            <br/>
                                            <br/>
                                            We then select a random number from our list of 100 numbers and it will give us the
                                            desired result.


                                        </p>
                                        <h6 className="mb-2"> Java Solution:</h6>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div
                                                    className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-5 offset-lg-4">
                                                    <code>
                                    <pre>
                                        {`
public class RandomGen {
    public ArrayList numbers = new ArrayList();
    public RandomGen(int[] a, double[] b) { 
        float sum = 0;
        if (b.length == 0) { //generates probabilities for you if none given
            for (int i = 0; i < a.length; i++) {
                Random random = new Random();
                b[i] = random.nextFloat();
                sum += b[i];
            }
        } else {
            for (int i = 0; i < a.length; i++) {
                sum += b[i];
            }
        }
        for (int i = 0; i < a.length; i++) { //normalise probability
            b[i] = b[i] / sum;
        }
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < (a[i] * 100); j++)
                numbers.add(a[i]);
        }
    }
    public int nextNum() {
        Random rand = new Random();
        return (int) this.numbers.get(rand.nextInt(numbers.size()));
    }
}
// main function when running
public static void main(String[] args) {
        int[] inputNumber = {1, 2, 3};
        double[] inputProbabilities = {0.1,0.5,0.4};
        RandomGen randomGen = new RandomGen(inputNumber, inputProbabilities);
        int runs = 100;
        for (int i = 0; i < runs; i++) {
            int number = randomGen.nextNum();
            System.out.println(number);
        }
}
                                      `}
                                    </pre>
                                                    </code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3 col-md-4 offset-md-4 mb-5" hidden={!this.state.hide0}>
                        <ul className="list-group" style={{cursor:"pointer"}}>
                            <li className="list-group-item text-center bg-info" onClick={() => this.setState({
                                hide1: true,
                                hide2: true,
                                hide3: true,
                                hide4: true,
                                hide5: true,
                                hide6: true,
                                hide0: false
                            })}>Back to list of projects
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class JavaCompile extends React.Component {

    render() {
        return (
            <div>
                {<CodeComp/>}
            </div>
        );
    }
}

export default JavaCompile;