import React, { useEffect, useState } from 'react';
import readingTime from 'reading-time/lib/reading-time'

function ReadingTime(props) {
    const [readingTimeInWords, setReadingTimeInWords] = useState("");

    useEffect(() => {
        setReadingTimeInWords(
            readingTime(document.querySelector(".markdown").innerText).text
        );
    });
    return (
        <div className="display-flex badge badge--secondary shadow--sm margin-bottom--md">
            {readingTimeInWords}
        </div>
    )
}

export default ReadingTime;