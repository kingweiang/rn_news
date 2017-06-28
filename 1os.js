<Icon.TabBarItem
    title="Blue Tab"
    iconName = "ios-home-outline"
    selectedIconName="ios-home"
    selected={this.state.selectedTab === 'blueTab'}
    onPress={() => {
        this.setState({
            selectedTab: 'blueTab',
        });
    }}>
    {this._renderContent('#414A8C', 'Blue Tab')}
</Icon.TabBarItem>
<TabBarIOS.Item
systemIcon="history"
badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
selected={this.state.selectedTab === 'redTab'}
onPress={() => {
    this.setState({
        selectedTab: 'redTab',
        notifCount: this.state.notifCount + 1,
    });
}}>
{this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
</TabBarIOS.Item>
<Icon.TabBarItem
    title="Blue Tab"
    iconName = "ios-home-outline"
    selectedIconName="ios-home"
    selected={this.state.selectedTab === 'blueTab'}
    onPress={() => {
        this.setState({
            selectedTab: 'blueTab',
        });
    }}>
    {this._renderContent('#414A8C', 'Blue Tab')}
</Icon.TabBarItem>
<Icon.TabBarItem
    title="Blue Tab"
    iconName = "ios-home-outline"
    selectedIconName="ios-home"
    selected={this.state.selectedTab === 'blueTab'}
    onPress={() => {
        this.setState({
            selectedTab: 'blueTab',
        });
    }}>
    {this._renderContent('#414A8C', 'Blue Tab')}
</Icon.TabBarItem>
<Icon.TabBarItem
    title="Blue Tab"
    iconName = "ios-home-outline"
    selectedIconName="ios-home"
    selected={this.state.selectedTab === 'blueTab'}
    onPress={() => {
        this.setState({
            selectedTab: 'blueTab',
        });
    }}>
    {this._renderContent('#414A8C', 'Blue Tab')}
</Icon.TabBarItem>
<TabBarIOS.Item
    systemIcon="history"
    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
    selected={this.state.selectedTab === 'redTab'}
    onPress={() => {
        this.setState({
            selectedTab: 'redTab',
            notifCount: this.state.notifCount + 1,
        });
    }}>
    {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
</TabBarIOS.Item>
<Icon.TabBarItem
    title="Blue Tab"
    iconName = "ios-home-outline"
    selectedIconName="ios-home"
    selected={this.state.selectedTab === 'blueTab'}
    onPress={() => {
        this.setState({
            selectedTab: 'blueTab',
        });
    }}>
    {this._renderContent('#414A8C', 'Blue Tab')}
</Icon.TabBarItem>
<Icon.TabBarItem
    title="Blue Tab"
    iconName = "ios-home-outline"
    selectedIconName="ios-home"
    selected={this.state.selectedTab === 'blueTab'}
    onPress={() => {
        this.setState({
            selectedTab: 'blueTab',
        });
    }}>
    {this._renderContent('#414A8C', 'Blue Tab')}
</Icon.TabBarItem>
