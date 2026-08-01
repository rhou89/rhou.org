---
title: Generative retrieval with semantic IDs
summary: Initiating and scaling a new generative-modeling direction for recommendation, from GPT-2 backbone improvements to cascading semantic IDs.
role: Technical Lead & Initiator
date: 2025-09-01
tags: [Generative Modeling, Semantic IDs, Retrieval]
eyebrow: AI Systems
impact: +22.2% clicks · +5.3% fresh engagement
featured: true
draft: false
---

## A new retrieval language

Traditional retrieval systems treat content IDs as arbitrary labels. Semantic IDs create a structured representation that can carry meaning, giving a generative model a more useful vocabulary for recommendation.

I initiated Pinterest's work on generative modeling and semantic IDs for Closeup, then drove a series of model and system improvements on a GPT-2 backbone.

## Technical direction

The program combined model scaling, negative mining, MMoE conditioning prediction, user-context tokens, and a cascading-fusion approach for semantic IDs.

The challenge was not simply demonstrating offline model quality. It was making the approach work within a production recommendation stack and aligning it with content-distribution goals.

## Signal

The generative-modeling work achieved **+22.2% clicks**. The semantic-ID cascading approach achieved **+5.3% fresh engagement** and was subsequently adopted across the company.
