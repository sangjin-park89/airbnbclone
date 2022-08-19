import React, { useState } from "react";

export default function useInput(defaultValue = null) {
    const [state, setState] = useState();

    const onChange = (event) => {setState(event.target.value)}

    return [state, onChange];
}