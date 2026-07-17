---
name: iterate-multiple-rounds
description: Always perform at least 2 comparison rounds before considering work complete
type: rule
---

Always do at least 2 comparison rounds; do not stop after one pass.

After generating and screenshotting the initial HTML:
1. Compare and identify all mismatches
2. Fix the mismatches
3. Re-screenshot and compare again
4. Repeat until no visible differences remain (within ~2–3px tolerance)

Do not declare the design recreation complete after a single comparison cycle. Only stop when the user says so or when the visual difference is negligible.
