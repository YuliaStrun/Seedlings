import React from 'react'
import { Button } from './Button'
import SearchSVG from '../assets/searchSVG'

const styles = {
    block: {
        position: 'relative',
    },
    search: {
        fontSize: '18px',
        border: '1px solid rgb(90, 96, 100)',
        borderStyle: 'solid',
        borderColor: 'rgb(90, 96, 100)',
        borderRadius: '0',
        paddingRight: '40px',
        paddingLeft: '20px',
        height: '55px',
      },
      button: {
        position: 'absolute',
        top: '12px',
    }
}

export const Search = () => {
    return (
        <div style={styles.block}>
            <input data-search-quick="" placeholder="Search" maxLength="128" style={styles.search}/>
            <Button data={<SearchSVG/>} style={styles.button} />
        </div>
    )
}