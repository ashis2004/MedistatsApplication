# MedistatsApplication
It is a sophisticated web application designed to detect behavioral disorders in children. It analyzes data patterns to provide tailored solutions for parents.

# Child Behaviour Detection using Classification Algorithm

## Overview

This project aims to develop a system for detecting child behavior using classification algorithms. The system analyzes various data inputs, such as text analysis, activity logs, and other relevant behavioral patterns, to classify different types of behaviors. The objective is to provide insights into child behavior for applications in education, healthcare, and parental monitoring.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Data Collection](#data-collection)
- [Data Preprocessing](#data-preprocessing)
- [Model Training](#model-training)
- [Evaluation](#evaluation)

## Introduction

The child behavior detection system leverages natural language processing (NLP) and machine learning (ML) algorithms to analyze input data and classify behaviors. This project encompasses data collection, preprocessing, feature extraction, model training, and evaluation.

## Features

- Collects and preprocesses data from various sources.
- Extracts features relevant to child behavior.
- Trains ML models using labeled datasets.
- Evaluates model performance and accuracy.
- Provides a predictive system for classifying child behavior.

## Data Collection

The system collects data from multiple sources such as text documents, activity logs, and user behavior. Ensure data privacy and compliance with data protection regulations during collection.

## Data Preprocessing

Data preprocessing includes cleaning, normalizing, and structuring the data. Techniques such as tokenization, stop-word removal, and stemming/lemmatization are applied for text data.

## Model Training

Machine learning algorithms such as decision trees, support vector machines, and neural networks are employed. The system is trained using labeled datasets where child behaviors have been previously identified.

## Evaluation

The trained model is validated and tested using various metrics to ensure accuracy and reliability. Continuous refinement and retraining are performed to maintain system performance.

### Model Accuracies

- **Logistic Regression (LR)**: 0.82
- **Support Vector Classifier (SVC)**: 0.79
- **Decision Tree (DT)**: 0.67
- **Random Forest (RF)**: 0.84
- **Gradient Boosting (GB)**: 0.84
- **AdaBoost (ADA)**: 0.84

### Generative AI (Gen AI) Integration: RAG System
To bridge the gap between classification output and actionable guidance, the project incorporates a Retrieval-Augmented Generation (RAG) system integrated with GPT-4.

## Technical Workflow:
# Knowledge Base Creation: 
A vast library of behavioral and pediatric research papers was collected.

# Chunking & Embedding: 
This research data was processed through chunking and embedding techniques to convert the documents into high-dimensional vector representations.

# Vector Store: 
These embeddings were stored in ChromaDB, establishing a powerful and indexed knowledge base.

# Chatbot Interface: 
A real-time UI was developed where parents can input assessment data or specific queries.

# Generation: 
When the parent submits an assessment or query, the system uses the RAG architecture to:

Retrieve the most relevant sections of the research papers from ChromaDB.

Pass this retrieved context, along with the user's input and the ML model's classification, to GPT-4.

Generate a highly contextualized and accurate response, report, or recommendation.
