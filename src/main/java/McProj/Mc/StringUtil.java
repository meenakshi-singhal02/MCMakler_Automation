package McProj.Mc;


/**
 * Performs methods like concat for Strings and Objects
 * @author cbhaka
 *
 */
public class StringUtil {

	/**
	 * performs the concat operation for Object Varargs
	 * @param objects
	 * @return concatenated String of objects
	 */
	public static String concatenate(final Object... objects) {
		String concatenatedString = null;
		if (null != objects) {
			StringBuilder concatenatedStringBuilder = null;
			for (final Object object : objects) {
				if (null == concatenatedStringBuilder) {
					concatenatedStringBuilder = new StringBuilder();
				}
				if (null != object) {
					concatenatedStringBuilder.append(object);
				}
			}
			concatenatedString = concatenatedStringBuilder.toString();
		}
		return concatenatedString;
	}

	/**
	 * performs the concat operation for String Varargs
	 * @param objects
	 * @return concatenated String of strings
	 */
	public static String concatenate(final String... strings) {
		String concatenatedString = null;
		if (null != strings) {
			StringBuilder concatenatedStringBuilder = null;
			for (final String string : strings) {
				if (null == concatenatedStringBuilder) {
					concatenatedStringBuilder = new StringBuilder();
				}
				if (null != string) {
					concatenatedStringBuilder.append(string);
				}
			}
			concatenatedString = concatenatedStringBuilder.toString();
		}
		return concatenatedString;
	}
}
