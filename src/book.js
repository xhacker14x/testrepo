import React from 'react';

const Book = ({img, title, author}) =>{
	const clickHandler = (e) =>{
		console.log(e);
		console.log(e.target);
		alert('hellow world!');
	}
	const moreComplexSample = (author) =>{
		console.log(author);
	}
	return(
		<article onMouseOver={()=>{
			console.log(title);
		}}>
			<img src={img} />
			<h3 onClick={()=> console.log(title)}>{title}</h3>
			<button type='button' onClick={clickHandler}>Reference Example</button>
			<button type='button' onClick={()=>moreComplexSample(author)}>More Complex Example</button>
		</article>
	) 
}

export default Book;