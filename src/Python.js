import './App.css';
import React from "react";

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import pythonL from './images/python-logo-vector-1.svg';

class CodeComp2 extends React.Component {

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
                    <code style={{color: "blue"}}>
                        <img className="pLogoP" src={pythonL}/> </code>
                </h1>
                <div className="container-fluid">
                    <div className="col-6 offset-3 col-md-6 offset-md-3 mb-5" hidden={this.state.hide0}>
                        <ul className="list-group text-center" style={{cursor: "pointer"}}>
                            <li className="list-group-item" onClick={() => this.setState({
                                hide1: true,
                                hide2: true,
                                hide3: true,
                                hide4: true,
                                hide5: true,
                                hide6: false,
                                hide0: true
                            })}>ASCII File Compression
                            </li>
                            <li className="list-group-item" onClick={() => this.setState({
                                hide1: true,
                                hide2: true,
                                hide3: true,
                                hide4: true,
                                hide5: false,
                                hide6: true,
                                hide0: true
                            })}
                                hidden="true">Mars Satellite Orbit
                            </li>
                            <li className="list-group-item" onClick={() => this.setState({
                                hide1: true,
                                hide2: true,
                                hide3: true,
                                hide4: false,
                                hide5: true,
                                hide6: true,
                                hide0: true
                            })}

                                hidden="true">Self-organised Criticality
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="container-fluid ps-5 pe-5 mt-5">
                            <div className="row row-cols-1">

                                <div className="col" hidden={this.state.hide6}>
                                    <div className="mb-5">
                                        <h2 className="card-title text-center">ASCII File Compression</h2>

                                        <p className="text-center mb-5">Monday, 26th June 2017 </p>
                                        <p style={{textAlign: "justify"}}>
                                            The Python programming language has been used to implement three different
                                            compression algorithms.
                                            Run-length encoding, Huffman and Lempel-Ziv were successfully produced and
                                            were used to compress text files.
                                            Bitmap images were also compressed using RLE. RLE achieved a compression
                                            rate of 115 for a line image. Huffman
                                            was best for literature text files less than 50 kb. Lempel-Ziv had the best
                                            compression rate of 2.25 for literature
                                            text files and was best for files greater than 50 kb.
                                            <br/>
                                            <br/>
                                            <h4>Introduction</h4>
                                            File compression is the process which reduces the size of a file for
                                            storage. There are various methods which are employed depending on the file
                                            type and size. The methods of compressing text (ASCII) and Bitmap files
                                            which are investigated in this report are Run-length encoding (RLE), Huffman
                                            and Lempel-Ziv (LZ). Reducing the size of files for storage frees up space
                                            and allows more to be stored. More importantly, it speeds up the process of
                                            transferring files through the internet and other networks which may be
                                            heavily congested.
                                            <br/>
                                            <br/>
                                            Data compression has been around since Morse code was
                                            developed in 1838. More advanced methods to be used with computers were
                                            developed later on. Huffman compression was introduced in 1951 by David
                                            Huffman, where he worked on optimising the method of using probability
                                            blocks to assign codewords to letters. This method was developed as
                                            technology improved, and lead to all data compression being done using the
                                            Huffman coding in the 1970s. During the late 1970s, Lempel and Ziv produced
                                            the Lempel-Ziv method which used pointer encoding.
                                            <br/>
                                            <br/>
                                            Files are stored as binary in computers. Binary is the representation of
                                            data at the most basic level. This means the level at which the computer
                                            processor can read it. Binary is either a one or a zero representing on/off
                                            states, this is because logic gates operate on this principle. Computers
                                            store data in segments of 8 bits which is one byte. ASCII (American Standard
                                            Code for Information Interchange) is simply a format for text files. ASCII
                                            represents letters and symbols used in English text using 8 bits per
                                            character. There can be up to 256 characters represented using 8 bits per
                                            character. Text files are saved with the ".txt" extension. The number of
                                            characters that can be stored, N, is given by N = 2^n, where n is the number
                                            of bits per character.
                                            <br/>
                                            <br/>
                                            In Python strings are a type of class used to represent text files.
                                            There are many ways to manipulate strings.
                                            They can be modified letter by letter which means pieces of text can be
                                            split into lists of words or characters.
                                            <br/>
                                            <br/>
                                            Bitmap and vector imaging are two methods to produce images. Bitmap uses
                                            pixels which are assigned a colour and position. Each pixel uses 24 bits
                                            for colour images or 8 bits for black and white. Vector images use
                                            mathematical formulas to produce curves and shapes. Only Bitmap images
                                            are compressed in this investigation. Lossless compression is carried out
                                            and it means that no information is lost during the process of compression
                                            and decompression. Lossy is the opposite, where some information is lost
                                            but the lost information is not as important.
                                            <br/>
                                            <br/>
                                            <h4>Implementing Run-length Encoding, Huffman and Lempel-Ziv</h4>
                                            For each method the algorithm is taken and then transformed into code in the
                                            Python programming language. Each algorithm is run using literature text
                                            files, and only run-length encoding is run with image files. Some images are
                                            taken from the internet and some are produced using Paint, for example line
                                            images are made on Paint. Graphs are then plotted to compare the compression
                                            rates and the time taken for compression. The text files are also found
                                            online and each one is different both in the genre and the actual text. This
                                            is so that it can be seen how each algorithm handles these differences.
                                            <br/>
                                            <br/>
                                            Run-length encoding (RLE) is done by counting the amount of characters and
                                            storing this information as a string. The string has the characters and then
                                            the number of characters. To implement this approach a counter was set up.
                                            While loops were used to count and check whether the character was repeated.
                                            After the character changes counting the next one starts. When complete the
                                            file is saved as a string. This is shown by figure 1. In order to decompress
                                            RLE, the compressed file is read and the program reads the letter and the
                                            corresponding number, n. Then it prints the letter n times. This was done
                                            using a while loop to cycle through the characters. Bitmap images were
                                            compressed by turning them into binary files which could then be treated as
                                            a list of characters. RLE compression was used for the bitmap images. Images
                                            are collected from the internet and saved as bitmap images using the ".bmp"
                                            extension. The types of images are different and include fractals,
                                            landscapes, text on backgrounds and human faces.
                                            <br/>
                                            <br/>
                                            <img src={image4} alt="-" style={{width: "100%"}}/>
                                            <br/>
                                            <br/>
                                            <h6 className="mb-2"> Run-length Encoding Python code:</h6>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div
                                                        className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-9 offset-lg-3">
                                                        <code style={{color: "darkBlue"}}>
                                    <pre>
                                        {`
import time as time
import array as ar
import os
from heapq import heappush, heappop, heapify
import pickle
import numpy as np
from io import StringIO

def characters(file):
    with open(file,'r') as f:
        return [character for line in f.readlines() for character in line]
def characterset(file): #lists all characters used in text
    characterset=set(characters(file))
    return(characterset)
def character_dictionary(file): #dictionary of characters
    characterdictionary={}
    for i in characterset(file):
        characterdictionary.update({i:characters(file).count(i)})
    return(characterdictionary)  
        
def runlengthcode(file):
    run_length_info=[]
    time_initial=time.time()
    characterlist=characters(file)
    lettersdictionary=[]
    i=0
    n=1
    while i<len(characterlist)-n:
        while i+n<len(characterlist) and characterlist[i]==characterlist[i+n]:
            n+=1
        else:
            lettersdictionary.append(str(len(characterlist[i:i+n])))
            lettersdictionary.append(characterlist[i])
            i+=n
            n=1
    final=''.join(lettersdictionary)
    run_length_file = open("runlengthcompressed.txt","w")
    run_length_file.write(final)
    print(final)
    run_length_file.close()
    size_run_length=os.path.getsize("runlengthcompressed.txt")
    time_final=time.time()
    time_difference=time_final - time_initial
    run_length_info.append(size_run_length)
    run_length_info.append(time_difference)
    return(run_length_info)
                                      `}
                                    </pre>
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-2"> Run-length Decompression Python code:</h6>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div
                                                        className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-9 offset-lg-3">
                                                        <code style={{color: "darkBlue"}}>
                                    <pre>
                                        {`
def RLE_decompression():
    file=open('runlengthcompressed.txt',"r+")
    mystring=file.readline(100)
    mystringlist=[]
    i = 0
    while i < len(mystring)-1:
        mystringlist.append([int(mystring[i]),mystring[i+1]])
        i+=2

    decompression=[]
    for i in mystringlist:
        y = i[0]
        while y>0:
            decompression.append(i[1])
            y=y-1
        
    decompression=''.join(decompression)
    print(decompression)
                                      `}
                                    </pre>
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                            Huffman encoding is implemented by using a frequency tree with probability
                                            blocks. As the probability of a letter is proportional to its frequency, a
                                            frequency of each letter is tabled. The tree is produced by assigning the
                                            frequency as the probability of the character. Higher probabilities are
                                            placed at the top of the tree and lower probabilities towards the bottom of
                                            the tree. To build the Huffman tree, the lower frequency letters are used at
                                            the bottom. When adding another letter to the tree its probability must be
                                            the lowest of all the letters that can be added to the tree but are not in
                                            the tree yet. Each character is assigned a binary number, going left along a
                                            branch a zero is assigned, and going right along a branch, a one is
                                            assigned. To encode the character, the tree branch is followed until the
                                            letter is reached as shown in figure 3. This is the key part of the
                                            compression because the most repeated letters are represented with the least
                                            amount of bits. To implement this into Python code, the function "heapq" is
                                            used because it produces a binary tree analogous to the Huffman tree.
                                            <br/>
                                            <br/>
                                            A separate function called "encodehuffman" is made to produce this tree.
                                            Then another function called "huffman" is produced which takes the tree
                                            and then outputs the binary representation of the word. When saving this in
                                            binary machine code, the Huffman encoding is split into 8 bit sequences
                                            because this is how data is stored in computers.
                                            <br/>
                                            <br/>
                                            <img src={image5} alt="-" style={{width: "100%"}}/>
                                            <br/>
                                            <br/>
                                            <img src={image1} alt="-" style={{width: "100%"}}/>
                                            <br/>
                                            <br/>
                                            In order to decompress using the Huffman method, the tree needs to be saved
                                            and sent alongside the binary encoding. Each binary digit is read and used
                                            as a map to find the corresponding character. The directions are left for a
                                            0 and right for a 1. As the encoded binary in saved as 8 bit sequences, the
                                            8 bit sequences are joined together to form a single string when decoding.
                                            This is because the Huffman encoding will not necessarily be in 8 bit
                                            sequences due to the nature of the Huffman tree. As shown in figure 2, each
                                            letter will have a different binary representation and different length.
                                            Therefore, when encoding the exact binary representation of the character
                                            will not fit exactly 8 bits. A while loop is used to cycle through the
                                            binary digits. As each binary digit is read the encoding will lead the
                                            computer to the end of a tree branch. At this point the program is told to
                                            stop reading binary, and to translate the scanned binary up until this point
                                            by using the Huffman tree. Once a translation to text occurs the program
                                            continues to scan the binary and produces the rest of the text using the
                                            same method.
                                            <br/>
                                            <br/>
                                            <h6 className="mb-2"> Huffman Compression Python code:</h6>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div
                                                        className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-9 offset-lg-3">
                                                        <code style={{color: "darkBlue"}}>
                                    <pre>
                                        {`
import time as time
import array as ar
import os
from heapq import heappush, heappop, heapify
import pickle
import numpy as np
from io import StringIO

def characters(file):
    with open(file,'r') as f:
        return [character for line in f.readlines() for character in line]
def characterset(file): #lists all characters used in text
    characterset=set(characters(file))
    return(characterset)
def character_dictionary(file): #dictionary of characters
    characterdictionary={}
    for i in characterset(file):
        characterdictionary.update({i:characters(file).count(i)})
    return(characterdictionary)
    
def encodehuffman(symb2freq): #frequency count and builds tree
    """Huffman encode the given dict mapping symbols to weights"""
    heap = [[wt,[sym,""]] for sym, wt in symb2freq.items() ]
    heapify(heap)
    while len(heap) > 1:
        lo = heappop(heap)
        hi = heappop(heap)
        for pair in lo[1:]:
            pair[1] = '0' + pair[1]
        for pair in hi[1:]:
            pair[1] = '1' + pair[1]
        heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])
    return sorted(heappop(heap)[1:], key = lambda p: (len(p[-1]),p))
def huffman(file): # uses tree to encode files
    time_initial=time.time()
    huffman_info=[]
    code=encodehuffman(character_dictionary(file))
    finaldict = {}
    codedict = {}
    j = 0
    while j<len(code):
        codedict.update({code[j][0]:code[j][1]})
        j=j+1
    k=0
    while k<len(code):
        finaldict.update({code[k][1]:code[k][0]})
        k=k+1
    final=''
    for i in characters(file):
        final = final+str(codedict[i])
    finallist =[]
    for i in final:
        finallist.append(i)
    final = str(final)
    k=0
    anotherlist=[]
    while k<len(finallist)-8:
        anotherlist.append(str(''.join(finallist[k:k+8])))
        k=k+8
    else:
        number=(str(''.join(finallist[k:len(finallist)]) ) )
        extrabits=8-len(number)
        while len(number)!=8:
            number+='0'
        anotherlist.append(number)
    with open('decompressionkey.pickle', 'wb') as handle:
        pickle.dump(finaldict, handle, protocol=pickle.HIGHEST_PROTOCOL)
    bin_array=ar.array('B')
    for i in anotherlist:
        bin_array.append(int(i,2))
    size=(len(bin_array))
    f = open('newfile.txt','wb')
    bin_array.tofile(f)
    f.close()
    f1=open('filesize.txt','w')
    f1.write( (str(size)+','+str(extrabits) ))
    f1.close()
    time_final=time.time()
    time_difference=time_final - time_initial
    size_huffman=os.path.getsize("newfile.txt")
    huffman_info.append(size_huffman)
    huffman_info.append(time_difference)
    return(huffman_info)
                                      `}
                                    </pre>
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-2"> Huffman Decompression Python code:</h6>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div
                                                        className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-9 offset-lg-3">
                                                        <code style={{color: "darkBlue"}}>
                                    <pre>
                                        {`
def huffman_decompression():
    time_initial= time.time()
    f= open('newfile.txt', 'rb')
    ra = ar.array('B')
    sizefile=open('filesize.txt', 'r+')
    sizefileline = sizefile.readline()
    size = ''
    while len(sizefileline)!=0:
        for i in sizefileline:
            size=size+str(i)
        sizefileline = sizefile.readline()
    size=size.split(',')
    sizeoffile=int(size[0])
    extrabits=int(size[1])
    ra.fromfile(f,int(sizeoffile))
    result=[]
    for c in ra:
        result.append('{0:08b}'.format(c))
    binarycode = result
    result=''.join(result)
    with open('decompressionkey.pickle', 'rb') as handle:
        b = pickle.load(handle)
    decompressionkey = b
    binary={}
    for i in decompressionkey.keys():
        binary.update({i:len(i)})
    maxlength = max(binary.values())
    minlength = min(binary.values())
    finaltext = ''
    p = 0
    k = minlength
    while p+k<= len(result)-extrabits:
        if result[p:p+k] not in binary:
            k+=1
        else:
            finaltext+=str(decompressionkey[result[p:p+k]])
            p+=k
            k=minlength
    file = open("decompressed_huffman.txt","w")
    file.write(finaltext)
    print(finaltext)
    file.close()
                                      `}
                                    </pre>
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                            Lempel-Ziv compression is based on pointer encoding. This means that it
                                            stores data and has a method to find it. Initially, a python dictionary of
                                            ASCII values up to 256 is produced. Input text is looped over. Each
                                            character is checked to see whether it is in the dictionary already. If the
                                            character is in the dictionary then it is not added but instead the next
                                            character is taken and the two are joined to form one set. This new set of
                                            characters is then checked against the dictionary. If it is not in the
                                            dictionary then it is added to the dictionary in a new slot outside the
                                            defined ASCII range. The previous character ASCII value is added to a list.
                                            For the first few words there will be little compression as there is little
                                            repetition. This means the first few values in the list will be actual ASCII
                                            defined values, which is an important point for the decompression. Once a
                                            pair of characters has been checked the process begins again for the next
                                            pair as shown in figure 3. At the end of this process the data is stored as
                                            binary. For this investigation 16 bits were used per character because after
                                            running a long piece of text such as "Hamlet" the dictionary size increases
                                            to around 44000. This mean that 16 bits would allow all these values to be
                                            represented. From equation 1, n=16 so N = 65536 which covers the range for
                                            large files. To save these 16 bit characters, they are written two bytes at
                                            a time using the "array" function.
                                            <br/>
                                            <br/>
                                            <img src={image6} alt="-" style={{width: "100%"}}/>
                                            <br/>
                                            <br/>
                                            To decompress using the Lempel-Ziv method, the same approach is taken as
                                            with the compression. There is no need to send the new dictionary along side
                                            the compressed file to decompress. When decompressing, an ASCII dictionary
                                            is produced however this time the key and values are flipped. Now the
                                            dictionary key is the ASCII value and the dictionary value is the character
                                            string. The decompression process is then implemented in the exact same way
                                            as with the compression but now it is run with numbers as the input. A
                                            potential problem with not sending the dictionary is that there will be
                                            undefined numbers as they are outside the ASCII range. This works without
                                            the compressed dictionary because the first few characters will be saved as
                                            defined ASCII values. So when the numbers are run through the code, the new
                                            dictionary formed will produce pairs in the dictionary which will be saved
                                            as the value outside the ASCII range. Therefore, when the code comes across
                                            the value which is outside the ASCII range it will be pointed to the value
                                            stored in the new dictionary which will translate to the defined ASCII
                                            values (see figure 5).
                                            <br/>
                                            <br/>
                                            <img src={image2} alt="-" style={{width: "90%"}}/>
                                            <br/>
                                            <br/>
                                            <h6 className="mb-2"> Lempel-Ziv Compression Python code:</h6>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div
                                                        className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-9 offset-lg-3">
                                                        <code style={{color: "darkBlue"}}>
                                    <pre>
                                        {`
import time as time
import array as ar
import os
from heapq import heappush, heappop, heapify
import pickle
import numpy as np
from io import StringIO

def characters(file):
    with open(file,'r') as f:
        return [character for line in f.readlines() for character in line]
def characterset(file): #lists all characters used in text
    characterset=set(characters(file))
    return(characterset)
def character_dictionary(file): #dictionary of characters
    characterdictionary={}
    for i in characterset(file):
        characterdictionary.update({i:characters(file).count(i)})
    return(characterdictionary)
                                            
def lempelziv(file):
    time_initial=time.time()
    lempelziv_info=[]
    dictionary_lempel_ziv = {}
    ascii = 256
    i =0
    while i < ascii:
        dictionary_lempel_ziv.update({chr(i):i})
        i+=1
    current = ""
    text = ar.array('H')
    for i in ''.join(characters(file)):
        currentnext = current +i
        if currentnext in dictionary_lempel_ziv:
            current = currentnext
        elif currentnext not in dictionary_lempel_ziv:
            text.append(dictionary_lempel_ziv[current])
            dictionary_lempel_ziv[currentnext] = ascii
            ascii = ascii + 1
            current = i
    text.append(dictionary_lempel_ziv[current])
    print('Compressed machine/ASCII values:')
    print(text)
    lempel_ziv_file = open('compressed_text','wb')
    text.tofile(lempel_ziv_file)
    lempel_ziv_file.close()
    size_lempel_ziv=os.path.getsize("compressed_text")
    time_final =time.time()
    time_difference = time_final - time_initial
    lempelziv_info.append(size_lempel_ziv)
    lempelziv_info.append(time_difference)
    return(lempelziv_info)
                                      `}
                                    </pre>
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="mb-2"> Lempel-Ziv Decompression Python code:</h6>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div
                                                        className="col-sm-9 offset-sm-3 col-md-7 offset-md-3 col-lg-9 offset-lg-3">
                                                        <code style={{color: "darkBlue"}}>
                                    <pre>
                                        {`
def LZ_decompression():
    f=open('compressed_text','rb')
    ra=ar.array('H')
    while True:
        try:
            ra.fromfile(f,100)
        except EOFError:
            break
    print("Compressed ASCII: ")
    print(ra)
    text=ra.tolist()
    dictionary = {}
    ascii =256
    i=0
    while i <ascii:
        dictionary.update({i:chr(i)})
        i+=1
    decompressed = StringIO()
    w = chr(text.pop(0))
    decompressed.write(w)
    for k in text:
        if k in dictionary:
            entry = dictionary[k]
        elif k == ascii:
            entry = w + w[0]
        decompressed.write(entry)
        dictionary[ascii] = w + entry[0]
        ascii += 1
        w = entry
    
    file = open("Decompressed_LZ.txt","w")
    file.write(decompressed.getvalue())
    print(decompressed.getvalue())
    file.close()
                                      `}
                                    </pre>
                                                        </code>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4>Analysis</h4>
                                            All three algorithms were implemented and did compress the size of files.
                                            Each algorithm preformed better than the others for different types and
                                            sizes of text. Run-length encoding (RLE) worked best for repeated
                                            characters, e.g "aaaaabbbbbcccc", but not for any literature. Huffman
                                            produced the best compression rates for small text which is not repeated.
                                            From figure (a) below, Huffman was shown to compress best when the file size
                                            was
                                            under 50 kb. Lempel-Ziv outperformed RLE compression for all literature. LZ
                                            did best when the file size exceeded 50 kb as shown in figure (a) below.
                                            Lempel-Ziv compression produced the highest compression rate of 2.25 for
                                            literature text files.
                                            <br/>
                                            <br/>
                                            RLE increased the size of all literature texts. This is seen in figure (a)
                                            where the RLE points lie on a straight line at a compression rate of 0.5.
                                            This is because literature text does not have many repeated characters in a
                                            row. As RLE counts the number of consecutive character repeats and then
                                            stores the character with the number of its repeats, it will be expected to
                                            increase the file size. This number is expected to be around double the
                                            original size and so the compression rate should be 0.5 which it is. The
                                            reason for this is because on average characters are repeated once in long
                                            pieces of literature. Therefore RLE saves each character as the character
                                            and a "1". And so each letter is now stored using twice as much space so
                                            overall it double the size of the file for text.
                                            <br/>
                                            <br/>
                                            Huffman compression maintained a stable compression rate across the large
                                            range of file sizes. The line for Huffman compression shown in figure (a)
                                            shows it decreases with increasing file size. The decrease is not very steep
                                            and nearly flat. This is expected because the Huffman algorithm is based on
                                            assigning probabilities to characters in the text. As for long pieces of
                                            text the frequency of characters reaches a equal level because of the nature
                                            of words. Words consist of characters, and are unchangeable entities which
                                            means they form the fundamental building blocks of sentences and so the
                                            whole text. As the amount of connectives, verbs and nouns used is
                                            proportionate in general literature the words used will eventually be
                                            repeated in equal amounts. This leads to the equal probability of finding a
                                            character for long pieces of text. Therefore, when building the probability
                                            tree for long pieces of text the difference in probabilities for each
                                            character decreases so the methods effectiveness decreases. Huffman was
                                            better than Lempel-Ziv for the smaller files because Lempel-Ziv relies on
                                            repetitions of combinations of characters in the text. There is little
                                            repetition for small files of literature text and so the Lempel-Ziv
                                            algorithm is not optimised for small files.
                                            <br/>
                                            <br/>
                                            For very small files («1 kb), LZ compression actually increases the size as
                                            the compression rate is less than 1. This is due to the lack of repetition
                                            in small files. On the other hand, for text which is more than a paragraph
                                            it does compress. In fact, Lempel-Ziv compression performed best for files
                                            above 50 kb because the amount of repetitions increasing as the file size
                                            increase for literature text. Repetition increase due to the same reason
                                            which was explained earlier. This means that the dictionary formed by the LZ
                                            algorithm becomes more effective as the file becomes larger and more
                                            repetitive. The LZ curve in figure (a) shows that it may reach a limit as
                                            the graphs gradient decreases at a lower rate after the 50 kb point. A limit
                                            must be reached because the dictionary will eventually include very large
                                            chunks of the text and so it will make little difference if another
                                            character is added to these large sets of characters.
                                            <br/>
                                            <br/>
                                            <img src={image3} alt="-" style={{width: "100%"}}/>
                                            <br/>
                                            <br/>
                                        </p>
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
                                            This will produce a number generator which will generate a number from given
                                            set of
                                            numbers with corresponding probability.
                                            <br/>
                                            <br/>
                                            We will produce a new list consisting of 100 numbers. As we want the
                                            selection of any
                                            of our numbers to be selected with a certain probability, we will insert
                                            each number
                                            with a frequency corresponding to the probability. To do this we multiply
                                            each probability
                                            by 100 and round this number, then we add this many times.
                                            <br/>
                                            <br/>
                                            For example, if we have list [1, 2, 3] and we want them to be selected with
                                            corresponding
                                            probabilities [0.1, 0.5, 0.4], then we would have 10 number 1's, 50 number
                                            2's and 40
                                            number 3's.
                                            <br/>
                                            <br/>
                                            We then select a random number from our list of 100 numbers and it will give
                                            us the
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
                        <ul className="list-group" style={{cursor: "pointer"}}>
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

class Python extends React.Component {

    render() {
        return (
            <div>
                {<CodeComp2/>}
            </div>
        );
    }
}

export default Python;