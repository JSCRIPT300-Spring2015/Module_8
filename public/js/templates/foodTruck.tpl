<h2 class="detailHeading"><%= name %></h2>
<p class="foodType"><%= foodType.join(', ') %></p>
<ul class="detailList">
	<% if (description.length) { %>
		<li class="detailList__item">
			<p class="description"><%= description %></p>
		</li>
	<% } %>
	<% if (payment.length) { %>
		<li class="detailList__item">
			<p class="detailList__category">Payment types accepted: <strong><%= payment.join(', ') %></strong></p>
		</li>
	<% } %>
	<% if (schedule.length) { %>
		<li class="detailList__item">
			<p class="detailList__category">Schedule: <strong><%= schedule.join(', ') %></strong></p>
		</li>
	<% } %>
	<% if (website.length) { %>
		<li class="detailList__item">
			<p class="detailList__category">Visit our <a href="<%= website %>" class="detailList__link">website</a></p>
		</li>
	<% } %>
	<% if (Facebook.length) { %>
		<li class="detailList__item">
			<p class="detailList__category">Like us on <a href="<%= Facebook %>" class="detailList__link">Facebook</a></p>
		</li>
	<% } %>
	<% if (Twitter.length) { %>
		<li class="detailList__item">
			<p class="detailList__category">Follow us on <a href="<%= Twitter %>" class="detailList__link">Twitter</a></p>
		</li>
	<% } %>

</ul>
