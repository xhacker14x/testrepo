import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';
import {books} from './books.js';
import {greeting} from './testing/testing.js';
import Book from './book.js';


function BookList(){
	console.log(greeting);
	return(
		<section className='booklist'>
			{books.map((book)=>{
				return(
						<Book key={book.id} {...book}></Book>
					);
			})}
		</section>	
	); 
}

ReactDom.render(<BookList/>,document.getElementById('root'));
