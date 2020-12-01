import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails/';

export default class BooksItem extends Component {
    gotService = new GotService();

    render(){
        return (
            <ItemDetails
            itemId={this.props.bookId}
            getData={this.gotService.getBook} >
            <Field field='authors' label='Authors' />
            <Field field='numberOfPages' label='Pages' />
            <Field field='country' label='Country' />
            <Field field='characters' label='Url with this book' />
            </ItemDetails>
        )
    }
}