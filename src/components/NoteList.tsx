import React from 'react'
import { NotesList } from '@/types/schema'

const NoteList: React.FC<NotesList> = ({ highlightedText, normalText }) => {
    return (
        <div>
            <ul className="my-4">
                <li>
                    <p className="text-muted-foreground text-xs">
                        <span className="font-italic text-xs text-foreground">{highlightedText}
                        </span>{" "}{normalText}
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default NoteList
