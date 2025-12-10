from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import models
import schemas
from database import SessionLocal, engine

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Campaign Management API",
    description="API for managing marketing campaigns with PostgreSQL",
    version="1.0.0"
)

# CORS configuration - allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get database session


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"message": "Campaign Management API", "status": "running"}


@app.get("/campaigns", response_model=List[schemas.Campaign])
def get_campaigns(db: Session = Depends(get_db)):
    """
    Fetch all campaigns from the database
    """
    campaigns = db.query(models.Campaign).all()
    return campaigns


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
