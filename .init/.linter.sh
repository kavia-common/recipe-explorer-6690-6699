#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-6690-6699/recipes_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

