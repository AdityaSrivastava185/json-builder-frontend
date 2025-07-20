import React from 'react'
import { NotesList } from '@/types/schema'

const NoteList: React.FC<NotesList> = ({ highlightedText, normalText }) => {
    return (
        <div className='ml-7'>
            <ul className="list-disc">
                <li>
                    <p className="text-muted-foreground text-xs ">
                        <span className="italic text-xs text-foreground">{highlightedText}
                        </span>{" "}{normalText}
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default NoteList
