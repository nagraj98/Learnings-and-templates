# Creating forms in React using react-hook-form and yup

Note : This is for V7 of react-hook-form, some functionalities might break for older or newer versions. Refer their official docs [here](https://react-hook-form.com/get-started).
## Installations
```
npm install react-hook-form yup @hookform/resolvers/yup
```
myForm.js :
```js
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"

import { formSchema } from "../Schemas/formSchema";

export default function myForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema),
    });

    const submitHandler = (data) => { console.log(data) }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit(submitHandler)}>

                <label className="formLabel" for="fName">First Name</label>
                <input className="formField" placeholder="First Name" { ...register("fName") } />
                {errors.fName?.message}

                

                <label className="formLabel" for="age">Age</label>
                <input className="formField" placeholder="Age" { ...register("age") } />
                {errors.age?.message}

                <input type="submit" />
            </form>
        </div>
    )
```

formSchema.js :
```js
import * as yup from "yup";

export const formSchema = yup.object().shape({
    age: yup.number().positive().integer().min(1).max(120).required(),
    fName: yup.string().required(),
})
```