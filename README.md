# Econometrics Course

Course material for an introductory econometrics / statistics course: lecture slides plus Jupyter lab exercises.

## Structure

| Folder | Content |
|---|---|
| `slides/` | Lecture slides (PDF/PPTX): introduction, linear model, tests, heteroskedasticity, endogeneity, time series, ridge & lasso, binning. Also `linear_model_schema.html`, an HTML summary page. |
| `labs/` | Lab notebooks with exercises (questions only). Solutions are shared with students separately, after each lab. |
| `project/` | Group projects, one folder per year. `2026-2027/`: household energy consumption and thermal renovation (French); statement `projet_2026_2027.pdf` (LaTeX source alongside) and data `donnees_energie.xlsx`. |

### Labs

| # | Topic | Exercises |
|---|---|---|
| 1 | Linear regression | `labs/1_linear_regression_exercises.ipynb` |
| 2 | Linear model | `labs/2_linear_model_exercises.ipynb` |
| 3 | Hypothesis tests | `labs/3_Lab_Tests_Questions.ipynb` |
| 4 | Heteroskedasticity & autocorrelation | `labs/4_Lab_HeteroAuto_Questions.ipynb` |
| 5 | Endogeneity & instrumental variables | `labs/5_Lab_Endogeneity_Questions.ipynb` |
| 6 | Binary choice (LPM, logit, probit) & Heckman selection | `labs/6_Lab_BinaryChoice_Questions.ipynb` |
| 7 | Ridge & lasso | `labs/7_Lab_RidgeLasso_Questions.ipynb` |

`labs/lab_1_introduction.ipynb` is an introductory notebook.

## Setup

Requires Python 3.14 and [uv](https://docs.astral.sh/uv/).

```bash
uv sync
uv run --with jupyterlab jupyter lab   # or open the notebooks in VS Code with the .venv kernel
```

Main libraries: numpy, pandas, scipy, statsmodels, scikit-learn, matplotlib, seaborn.
