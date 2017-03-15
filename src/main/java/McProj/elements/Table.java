/*
 * Copyright 2015 www.seleniumtests.com
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package McProj.elements;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebElement;


/**
 * Defines the functionalities of locating different Table WebElements. It only
 * defines the functionalities supported by the framework for the selectors.
 */
public class Table extends Element {

	

	/**
	 * List of WebElement rows
	 */
	private List<WebElement> rows = null;

	/**
	 * List of WebElement columns
	 */
	private List<WebElement> columns = null;

	/**
	 * Initializing the Table Element with By locator.
	 * 
	 * @param by
	 *            The By locator
	 */
	public Table(final By by) {
		super(by);
	}

	/**
	 * find the table row element.
	 */
	public void findElement() {
		super.getElement();
		
		try {
			rows = element.findElements(By.tagName("tr"));
		} catch (NotFoundException e) {
		}

	}

	/**
	 * finds the table column count.
	 * 
	 * @return the column count.
	 */
	public int getColumnCount() {
		
		if (rows == null) {
			findElement();
		}

		if (rows != null && !rows.isEmpty()) {
			try {
				columns = rows.get(0).findElements(By.tagName("td"));
			} catch (NotFoundException e) {
			}

			if (columns == null || columns.size() == 0) {

				try {
					if (rows.size() > 1) {
						columns = rows.get(1).findElements(By.tagName("td"));
					} else {
						columns = rows.get(0).findElements(By.tagName("th"));
					}
				} catch (NotFoundException e) {
				}
			}
		}

		if (columns != null) {
			
			return columns.size();
		}

		return 0;
	}

	/**
	 * Gets the columns.
	 * 
	 * @return List of column.
	 */
	public List<WebElement> getColumns() {
		return columns;
	}

	/**
	 * Get table cell content.
	 * 
	 * @param row
	 *            Starts from 1
	 * @param column
	 *            Starts from 1
	 */
	public String getContent(final int row, final int column) {
		if (rows == null) {
			findElement();
		}

		if (rows != null && !rows.isEmpty()) {
			try {
				columns = rows.get(row - 1).findElements(By.tagName("td"));
			} catch (NotFoundException e) {
			}

			if (columns == null || columns.size() == 0) {
				try {
					columns = rows.get(row - 1).findElements(By.tagName("th"));
				} catch (NotFoundException e) {
				}
			}

			return columns.get(column - 1).getText();
		}

		return null;
	}

	/**
	 * Gets the row count for different Table.
	 * 
	 * @return row count.
	 */
	public int getRowCount() {
		
		if (rows == null) {
			findElement();
		} else {
			return rows.size();
		}

		int count = element.findElements(By.xpath("tbody/tr")).size();
		if (count == 0) {
			count = element.findElements(By.xpath("tr")).size();
		}

		return count;
	}

	/**
	 * List of rows in a Table.
	 * 
	 * @return the rows.
	 */
	public List<WebElement> getRows() {
		return rows;
	}

	/**
	 * Checks if the table has a body.
	 * 
	 * @return true if the table has body, else false.
	 */
	public boolean isHasBody() {
		return getRows().size() > 0;
	}
}
