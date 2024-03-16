
const HomeFeedIcon = (props) => (
                    <Svg width={24} height={24} fill="none" {...props}>
                                        <Path
                                                            fill="#FF9134"
                                                            d="M10.81 15.851H1.351A1.351 1.351 0 0 0 0 17.203v9.459a1.352 1.352 0 0 0 1.351 1.35h9.46a1.352 1.352 0 0 0 1.35-1.35v-9.46a1.351 1.351 0 0 0-1.35-1.35ZM25.674.987h-9.459a1.351 1.351 0 0 0-1.35 1.351v9.46a1.351 1.351 0 0 0 1.35 1.35h9.46a1.351 1.351 0 0 0 1.35-1.35v-9.46a1.351 1.351 0 0 0-1.35-1.35Zm-1.35 8.378c0 .597-.485 1.081-1.082 1.081h-4.594a1.081 1.081 0 0 1-1.081-1.08V4.77c0-.597.484-1.081 1.08-1.081h4.595c.597 0 1.081.484 1.081 1.08v4.595Zm1.35 6.486h-9.459a1.351 1.351 0 0 0-1.35 1.352v9.459a1.352 1.352 0 0 0 1.35 1.35h9.46a1.351 1.351 0 0 0 1.35-1.35v-9.46a1.351 1.351 0 0 0-1.35-1.35ZM10.81.987H1.351A1.351 1.351 0 0 0 0 2.338v9.46a1.351 1.351 0 0 0 1.351 1.35h9.46a1.351 1.351 0 0 0 1.35-1.35v-9.46a1.351 1.351 0 0 0-1.35-1.35ZM9.46 9.365c0 .597-.484 1.081-1.081 1.081H3.784a1.081 1.081 0 0 1-1.081-1.08V4.77c0-.597.484-1.081 1.08-1.081h4.595c.597 0 1.081.484 1.081 1.08v4.595Z"
                                        />
                    </Svg>
);

const PlasticIcon = (props) => (
                    <Svg width={28} height={28} fill="none" {...props}>
                                        <Rect width={12} height={12} y={13} fill={props.color} rx={1} />
                                        <Rect width={12} height={12} y={13} fill={props.color} rx={1} />
                                        <Rect width={12} height={12} x={15} y={13} fill={props.color} rx={1} />
                                        <Rect width={12} height={12} x={15} y={13} fill={props.color} rx={1} />
                                        <Rect width={6} height={6} x={3} y={16} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={3} y={16} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={3} y={16} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={18} y={16} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={18} y={16} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={18} y={16} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={3} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={3} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={3} fill={props.color} rx={1} />
                                        <Rect width={6} height={6} x={18} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={18} fill="#fff" rx={1} />
                                        <Rect width={6} height={6} x={18} fill={props.color} rx={1} />
                    </Svg>
);

const MomentsIcon = (props) => (
                    <Svg width={32} height={32} fill="none" {...props}>
                                        <Path
                                                            stroke={props.color || '#000'}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 28h3.5a3.5 3.5 0 0 0 3.5-3.5V21m0-10V7.5A3.5 3.5 0 0 0 24.5 4H21M11 28H7.5A3.5 3.5 0 0 1 4 24.5V21m0-10V7.5A3.5 3.5 0 0 1 7.5 4H11M15.75 9v13.5m6.75-6.75H9"
                                        />
                    </Svg>
);

const LeaderBoardIcon = (props) => (
                    <Svg width={32} height={28} fill="none" {...props}>
                                        <Path
                                                            stroke={props.color || '#636363'}
                                                            d="m.973 24.008 12.63-22.104c.75-1.313 2.631-1.35 3.433-.067L30.85 23.94c.833 1.332-.125 3.06-1.696 3.06H2.71C1.174 27 .211 25.341.973 24.008Z"
                                        />
                    </Svg>
);

export const BottomNavigationIcons = {
                    HomeStack: () => <HomeFeedIcon color={colors.smokeGray} />,
                    FeedStack: () => <PlasticIcon color={colors.smokeGray} />,
                    MomentsStack: () => <MomentsIcon color={colors.smokeGray} />,

};

export const BottomNavigationFilledIcons = {
                    HomeStack: () => <HomeFeedIcon color={colors.saffron} />,
                    LeaderBoardStack: () => <LeaderBoardIcon color={colors.saffron} />,
                    FeedStack: () => <PlasticIcon color={colors.saffron} />,

};