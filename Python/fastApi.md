# FastApi

[FastAPI](https://fastapi.tiangolo.com/) is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.

## Installation

    pip install "fastapi[all]"
Specifying "all" installs some additional things like [uvicorn](http://www.uvicorn.org/) which can be used as the server that runs our code

## Getting Started

    from  fastapi  import  FastAPI
    
    app  =  FastAPI()
    
    @app.get("/")
    async  def  root():  
	    return  {"message":  "Hello World"}

Here the `app` variable will be an "instance" of the class `FastAPI`.

That `@something` syntax in Python is called a "decorator". The  `@app.get("/")`  tells  **FastAPI**  that the function right below is in charge of handling requests that go to:

-   the path  `/`
-   using a  `get`  operation

It is the "**path operation decorator**".

In the operation function ( like root() ), we can return a  `dict`,  `list`, singular values as  `str`,  `int`, Pydantic models, etc

This is the [simplest](https://fastapi.tiangolo.com/tutorial/first-steps/) fastapi app. We can write this in a main file and then run it using following uvicorn command in terminal.

    uvicorn main:app --reload
where, 

-   `main`: the file  `main.py`  (the Python "module"). If the main file is in a directory called api, we need to mention it like `api.main`
-   `app`: the object created inside of  `main.py`  with the line  `app = FastAPI()`.
-   `--reload`: make the server restart after code changes. Only use for development.

This starts the server at localhost(http://127.0.0.1:8000) by default. FastAPI also provides the docs using [SwaggerUI](https://github.com/swagger-api/swagger-ui) at **/docs**, and using [ReDoc](https://github.com/Redocly/redoc) at **/redoc** 


## CORS
When accessing the api from an origin that is not same as the api (which will mostly be the case), We will get an error similar to "**Access to fetch at *** from origin *** has been blocked by CORS policy: No 'Access-Control-Allow-Origin**"

The [solution](https://fastapi.tiangolo.com/tutorial/cors/) to this problem is to add a CORS middleware.

Adding CORS middleware and allowing access to specific origins from which we intend to access this api :

    from  fastapi.middleware.cors  import  CORSMiddleware
    
    origins = [ "http://localhost", 
			    "http://localhost:8080", ]
			    
	app.add_middleware( CORSMiddleware, 
						allow_origins=origins, 
						allow_credentials=True, 
						allow_methods=["*"], 
						allow_headers=["*"], )

## Returning files or images

We can use the [FileResponse](https://fastapi.tiangolo.com/advanced/custom-response/#fileresponse) object. for this.

    return FileResponse(some_file_path)

Other ways to return images, read [here](https://pyquestions.com/how-do-i-return-an-image-in-fastapi)